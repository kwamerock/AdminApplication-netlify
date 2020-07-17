import React, { useState, useCallback, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import {
  queryOrgRepos,
  queryMyRepos,
  queryBranches,
  querySearchRepos,
  queryOrgs,
} from "./queries";

import { Step } from "./Step";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const REACT_APP_GITHUB_APP_SLUG = process.env.REACT_APP_GITHUB_APP_SLUG;

export function Steps() {
  const [step, setStep] = useState("init");
  const [owner, setOwner] = useState();
  const [isOwnerMe, setIsOwnerMe] = useState();
  const [repo, setRepo] = useState();
  const [branch, setBranch] = useState();
  const [repoKeyword, setRepoKeyword] = useState();
  const [hasDoneError, setHasDoneError] = useState();
  const [doneError, setDoneError] = useState();

  const handleClickReset = useCallback(() => {
    setIsOwnerMe(undefined);
    setOwner(undefined);
    setRepo(undefined);
    setBranch(undefined);
    setRepoKeyword(undefined);
    setHasDoneError(undefined);
    setDoneError(undefined);
    setStep("init");
  }, [setStep]);

  const handleClickMine = useCallback(() => {
    setIsOwnerMe(true);
    setStep("repos");
  }, [setStep]);

  const handleClickOrgs = useCallback(() => {
    setStep("orgs");
  }, [setStep]);

  const handleClickOrg = useCallback(
    (e, { item: clickedOrg }) => {
      setIsOwnerMe(false);
      setOwner(clickedOrg.login);
    },
    [setOwner, setIsOwnerMe]
  );

  const handleClickRepo = useCallback(
    (e, { item: clickedRepo }) => {
      (async () => {
        setRepo(clickedRepo);
        setStep("branches");
      })();
    },
    [setRepo, setStep]
  );

  const handleClickBranch = useCallback(
    (e, { item: branch }) => {
      (async () => {
        setBranch(branch);

        try {
          const res = await fetch(
            `${REACT_APP_BASE_URL}/.netlify/functions/repo-add`,
            {
              method: "POST",
              body: JSON.stringify({
                owner,
                repo: repo?.name,
                branch: branch?.name,
              }),
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }
          );

          if (!res.ok) {
            setHasDoneError(true);

            try {
              setDoneError({ error: await res.text() });
            } catch {}
          }
        } catch (error) {
          setHasDoneError(true);
        }

        setStep("done");
      })();
    },
    [setBranch, owner, repo]
  );

  const handleSuccessRepos = useCallback(
    ({ data }) => {
      setOwner(data.data.viewer.login);
    },
    [setOwner]
  );

  const handleChangeRepoKeyword = useCallback(
    (e) => {
      setRepoKeyword(e.target.value);
    },
    [setRepoKeyword]
  );

  useEffect(() => {
    if (owner) {
      setStep("repos");
    }
  }, [owner]);

  const configureGitHubAppLink = (
    <a
      href={`https://github.com/apps/${REACT_APP_GITHUB_APP_SLUG}/installations/new`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Configure the WithCanvas app on GitHub.
    </a>
  );

  return (
    <div>
      <div className="my-3">
        {step !== "init" && (
          <button className="btn btn-secondary" onClick={handleClickReset}>
            Start over
          </button>
        )}
      </div>
      <div className="my-3">
        {owner}
        {owner ? "/" : ""}
        {repo?.name}
        {owner && branch?.name ? "@" : ""}
        {branch?.name}
      </div>
      {step === "init" && (
        <div>
          <div className="my-3">Which GitHub repos?</div>
          <button className="btn btn-primary mr-3" onClick={handleClickMine}>
            My repos
          </button>{" "}
          <button className="btn btn-secondary" onClick={handleClickOrgs}>
            Org repos
          </button>
        </div>
      )}
      {step === "orgs" && (
        <Step
          query={queryOrgs}
          getConnection={(data) => data.data.viewer.organizations}
          handleEvent={handleClickOrg}
        >
          {({ item }) => item.name + " " + item.login}
        </Step>
      )}
      {step === "repos" && (
        <>
          <DebounceInput
            value={repoKeyword}
            onChange={handleChangeRepoKeyword}
            debounceTimeout={300}
            placeholder="Search"
            className="form-control my-3"
          />
          {repoKeyword ? (
            <Step
              query={querySearchRepos}
              variables={{
                query: `${
                  // TODO: Ensure proper escaping.
                  repoKeyword.replace(/:/g, "\\:")
                } in:name ${isOwnerMe ? "user" : "org"}:${owner}`,
              }}
              getConnection={(data) => data.data.search}
              onSuccess={handleSuccessRepos}
              handleEvent={handleClickRepo}
            >
              {({ item }) => item.name}
            </Step>
          ) : isOwnerMe ? (
            <Step
              query={queryMyRepos}
              getConnection={(data) => data.data.viewer.repositories}
              onSuccess={handleSuccessRepos}
              handleEvent={handleClickRepo}
            >
              {({ item }) => item.name}
            </Step>
          ) : (
            <Step
              query={queryOrgRepos}
              variables={{ owner }}
              getConnection={(data) => data.data.organization.repositories}
              handleEvent={handleClickRepo}
            >
              {({ item }) => item.name}
            </Step>
          )}
          <div className="my-3">
            Don't see your repo? {configureGitHubAppLink}
          </div>
        </>
      )}
      {step === "branches" && (
        <>
          <Step
            query={queryBranches}
            variables={{
              owner,
              name: repo?.name,
            }}
            getConnection={(data) => data.data.repository.refs}
            handleEvent={handleClickBranch}
          >
            {({ item }) => item.name}
          </Step>
          <div className="my-3">
            Don't see your branch? {configureGitHubAppLink}
          </div>
        </>
      )}
      {step === "done" && (
        <div>
          {hasDoneError ? (
            <div>
              {doneError ? `Error: ${doneError.error}` : "Unknown error."}
            </div>
          ) : (
            <h3>Done!</h3>
          )}
        </div>
      )}
    </div>
  );
}
