import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../layout";

export function Sites() {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            demo: objectPath.get(
                uiService.config,
                "sites"
            )};
    }, [uiService]);
    return <>
        <h1>Sites</h1>
    </>;
}
