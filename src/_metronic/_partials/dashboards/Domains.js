import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../layout";

export function Domains() {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            demo: objectPath.get(
                uiService.config,
                "domains"
            )};
    }, [uiService]);
    return <>
        <h1>Domains</h1>
    </>;
}
