import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";



const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    ar: { label: "العربية", dir: "rtl", active: false },
    fr: { label: "Français", dir: "ltr", active: false }
};

const LanguageSelect = () => {
    const selected = localStorage.getItem("i18nextLng") || "en";
    const { t } = useTranslation();


    useEffect(() => {
        document.body.dir = languageMap[selected].dir;
    }, [selected]);

    return (
        <div className="d-flex justify-content-end align-items-center language-select-root">

            <select
                onChange={(e) => {
                    // console.log({ e: e.target.value });
                    i18next.changeLanguage(e.target.value);
                }}

            >

                <option>{t("select_language")}</option>
                {Object.keys(languageMap)?.map(item => (

                    <option
                        button
                        key={item}
                        value={item}
                    >
                        {languageMap[item].label}
                    </option>
                ))}

            </select>
        </div>
    );
};

export default LanguageSelect;
