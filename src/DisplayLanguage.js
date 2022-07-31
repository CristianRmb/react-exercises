import React from 'react';
import { LanguageContext } from './LanguageContext';

/* Consume the LanguageContext within the DisplayLanguage component by using the context consumer, 
and show the selected language in an h1 tag. */

const Language = {
  en: 'English',
  it: 'Italiano',
};
export class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <h1>Language: {Language[language]}</h1>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
