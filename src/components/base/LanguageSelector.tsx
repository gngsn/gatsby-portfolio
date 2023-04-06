import React from 'react';
import { LanguageSelector } from 'gatsby-plugin-translate'

const CustomLanguageSelector = () => {
    return (
        <>
            <LanguageSelector sourceLanguage={true}>English</LanguageSelector>
            <LanguageSelector language="kr">Korean</LanguageSelector>
        </>
    )
}