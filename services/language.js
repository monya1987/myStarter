import React from 'react';
import ru from '../translations/ru';
import en from '../translations/en';

export function setLanguage(Component, lang) {
    let translation;
    switch(lang) {
        case 'ru':
            translation = ru;
            break;
        default:
            translation = en;
            break;
    }
    return function(props) {
        return <Component translation={translation['component'][Component.name]} {...props} />
    }
}