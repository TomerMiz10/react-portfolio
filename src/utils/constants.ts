import { ScrollOptions } from "./types/types";

export const applicationRoutes: Record<ScrollOptions, string> = {
    [ScrollOptions.HOME]: "/",
    [ScrollOptions.ABOUT]: "/about",
    [ScrollOptions.SKILLS]: "/skills",
    [ScrollOptions.PROJECTS]: "/projects",
    [ScrollOptions.EXPERIENCE]: "/experience",
    [ScrollOptions.CONTACT]: "/contact",
};