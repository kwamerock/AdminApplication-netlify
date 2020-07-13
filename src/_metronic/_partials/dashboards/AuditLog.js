import React, {useMemo} from "react";
import objectPath from "object-path";
import {useHtmlClassService} from "../../layout";

export function AuditLog() {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            demo: objectPath.get(
                uiService.config,
                "auditLog"
            )};
    }, [uiService]);
    return <>
        <h1>AuditLog</h1>
    </>;
}
