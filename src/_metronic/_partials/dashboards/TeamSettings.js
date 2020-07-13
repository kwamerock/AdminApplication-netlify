import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../layout";

export function TeamSettings() {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            demo: objectPath.get(
                uiService.config,
                "teamSettings"
            )};
    }, [uiService]);
    return <>
        <h1>Team Settings</h1>
    </>;
}
