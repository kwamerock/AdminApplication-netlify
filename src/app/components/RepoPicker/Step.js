import React, { useCallback, useMemo } from "react";
import { Spinner } from "react-bootstrap";
import { fetchGitHub } from "./fetchGitHub";
import { useFetchPaginateGraphQL } from "./useFetchPaginateGraphQL";

const Item = ({ item, children, handleEvent }) => {
  const handleEventBound = useCallback(
    (e) => {
      e.preventDefault();
      handleEvent(e, { item });
    },
    [handleEvent, item]
  );

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      className="list-group-item list-group-item-action"
      onClick={handleEventBound}
    >
      {children({ item })}
    </a>
  );
};

export const Step = ({
  children,
  query,
  variables,
  getConnection,
  handleEvent,
  onSuccess,
}) => {
  const variablesMemo = useMemo(
    () => variables,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(variables)]
  );

  const fetchConnection = useCallback(
    async ({ cursor }) => {
      const { data } = await fetchGitHub(query, {
        cursor,
        ...variables,
      });

      if (data.errors) {
        return { errors: data.errors };
      }

      if (onSuccess) onSuccess({ data });

      return {
        connection: getConnection(data),
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, variablesMemo, getConnection, onSuccess]
  );

  const {
    fetchMore,
    items,
    hasNextPage,
    error,
    errors,
    isLoading,
  } = useFetchPaginateGraphQL(fetchConnection, [query, variablesMemo]);

  const handleClickMore = useCallback(() => {
    fetchMore();
  }, [fetchMore]);

  if (error) {
    return <div>There was an error.</div>;
  }

  if (errors) {
    return (
      <div>
        There were errors:
        <div>
          {errors.map((error) => (
            <div>{error.message}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="list-group">
        {items.map((item) => (
          <Item key={item.id} item={item} handleEvent={handleEvent}>
            {children}
          </Item>
        ))}
      </div>
      {!isLoading && hasNextPage && (
        <button
          className="btn btn-primary btn-block my-3"
          onClick={handleClickMore}
        >
          More
        </button>
      )}
      {isLoading && (
        <div className="d-flex justify-content-center p-2">
          <Spinner animation="border" size="lg" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};
