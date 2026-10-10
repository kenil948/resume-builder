export const defaultSkills = [
    "Figma",
    "Sketch",
    "Adobe Creative Suite",
    "Prototyping",
    "User Research",
    "Design Systems",
    "HTML/CSS",
    "React",
];

export const getSkillsArray = (skills = "") => {
    return [
        ...new Set(
            skills
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean)
        ),
    ];
};