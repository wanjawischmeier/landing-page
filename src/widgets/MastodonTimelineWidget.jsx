import { useEffect, useRef } from "react";
import * as MastodonTimeline from "@idotj/mastodon-embed-timeline";
import './MastodonTimelineWidget.css';

export default function MastodonTimelineWidget() {
    const initializedRef = useRef(false);

    useEffect(() => {
        if (!initializedRef.current) {
            new MastodonTimeline.Init({
                instanceUrl: "https://techhub.social",
                timelineType: "profile",
                userId: "114638089985517682",
                profileName: "@movementwiki",
            });
            initializedRef.current = true;
        }
    }, []);

    return (
        <div id="mt-container" className="mt-container h-full">
                <div className="mt-body" role="feed">
                    <div className="mt-loading-spinner"></div>
            </div>
        </div>
    );
}
