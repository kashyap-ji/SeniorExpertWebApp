import JobStatusCard from "../job-status-card/JobStatusCard";
export default {
    title:"JobStatusCard",
    component: JobStatusCard,
}
export const test1 = () =>
<JobStatusCard company="Spotify" companylogo="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" Status="Pending" position="Product Manager"></JobStatusCard>
export const test2 = () =>
<JobStatusCard company="Spotify" companylogo="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" Status="Accepted" position="Software Developer"></JobStatusCard>
export const test3 = () =>
<JobStatusCard company="Spotify.Inc" companylogo="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" Status="Bookmarked" position="SOC Analyst"></JobStatusCard>
export const test4 = () =>
<JobStatusCard company="Spotify.Inc" companylogo="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" Status="Rejected" position="Senior Developer"></JobStatusCard>