import { CategoryDetails } from "./types";

export const formatCastingDetails = (casting_time: string, ritual: boolean, duration: string, concentration: boolean, range: string, components: string[]) => {
    const details: CategoryDetails[] = [];

    if (casting_time) {
        details.push({
            category: "casting",
            title: "Casting time",
            content: casting_time + (ritual ? " (or ritual)" : "")
        })
    }

    if (duration) {
        details.push({
            category: "duration",
            title: "Duration",
            content: duration + (concentration ? " (concentration)" : "")
        })
    }

    if (range) {
        details.push({
            category: "range",
            title: "Range",
            content: range
        })
    }

    if (components) {
        const componentString = components.join(", ").replace("V", "verbal").replace("S", "somatic").replace("M", "material");

        details.push({
            category: "components",
            title: "Components",
            content: componentString.charAt(0).toUpperCase() + componentString.slice(1)
        })
    }

    return details;
}

export const formatMaterialDetails = (material: string) => {
    const details: CategoryDetails[] = [];

    if (material) {
        details.push({
            category: "material",
            title: "Materials",
            content: material
        })
    }

    return details;
}

export const formatDamageDetails = (damage: { [level: string]: string }) => {
    const details: CategoryDetails[] = [];

    for (const level in damage) {
        details.push({
            category: `level-${level}`,
            title: `Level ${level}`,
            content: damage[level]
        })
    }

    return details;
}