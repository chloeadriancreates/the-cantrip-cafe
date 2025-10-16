import styles from "./page.module.scss";
import DetailRow from "@/components/DetailRow/detailrow";
import { Class } from "@/lib/types";
import { Metadata } from "next";
import { formatCastingDetails, formatMaterialDetails, formatDamageDetails } from "@/lib/formatter";
import { getSpellDetails } from "@/lib/fetch";

export async function generateMetadata(
    { params }: { params: Promise<{ index: string }> }
): Promise<Metadata> {
    const spell = await getSpellDetails(params);
    return {
        title: spell.name,
        description: spell.desc?.[0]?.slice(0, 150)
    };
}

const SpellPage = async ({ params }: { params: Promise<{ index: string }> }) => {
    const { name, level, school, classes, casting_time, duration, concentration, ritual, range, components, material, damage, desc, higher_level } = await getSpellDetails(params);

    return (
        <main className={styles.main}>
            <div>
                <header>
                    <h2>{name}</h2>
                    <div>
                        <span>{level === 0 ? "Cantrip" : `Level ${level}`}</span>
                        <span>{school.name}</span>
                        <span>{classes.map((cls: Class) => cls.name).join(", ")}</span>
                    </div>
                </header>

                <DetailRow details={formatCastingDetails(casting_time, ritual, duration, concentration, range, components)} />
                {material && <DetailRow details={formatMaterialDetails(material)} />}
                {damage && <DetailRow details={formatDamageDetails(damage.damage_at_slot_level)} />}

                <article>
                    {desc.length &&
                        <div data-type="description">
                            <h3>Description</h3>
                            {desc.map((paragraph: string, index: number) =>
                                <p key={index}>{paragraph}</p>
                            )}
                        </div>
                    }

                    {higher_level.length &&
                        <div data-type="description">
                            <h3>At higher levels</h3>
                            {higher_level.map((paragraph: string, index: number) =>
                                <p key={index}>{paragraph}</p>
                            )}
                        </div>
                    }
                </article>
            </div>
        </main>
    )
}

export default SpellPage;