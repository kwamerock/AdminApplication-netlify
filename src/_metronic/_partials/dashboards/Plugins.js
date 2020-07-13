import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../layout";

export function Plugins() {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            demo: objectPath.get(
                uiService.config,
                "plugins"
            )};
    }, [uiService]);
    return <>
        <h1>Plugins</h1>
    </>;
}
