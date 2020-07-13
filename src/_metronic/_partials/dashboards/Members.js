import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../layout";

export function Members() {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            demo: objectPath.get(
                uiService.config,
                "members"
            )};
    }, [uiService]);
    return <>
        <h1>Members</h1>
    </>;
}
