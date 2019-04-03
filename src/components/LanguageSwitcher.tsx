import React from 'react'
import styled from 'styled-components'
import { IntlContextConsumer, Link } from 'gatsby-plugin-intl'

import { designSystem } from '../utils/designSystem'
import { Language } from '../utils/language'
import { media } from '../utils/media'

// interface Props {
//   languages: {
//     en: boolean
//     ja: boolean
//   }
//   selectedLanguage: string
//   onClick: (langKey: Language, e: any) => void
// }

const Wrapper = styled.div`
  margin-bottom: ${designSystem.spacing(2)};
  @media ${media.phone} {
    position: absolute;
    z-index: 9;
    top: ${designSystem.spacing(1)};
    right: ${designSystem.spacing(1)};
  }
`

const LanguageSwitch = styled.span`
  margin-right: ${designSystem.spacing(2)};
  color: ${designSystem.color('white', 'darker')};
  cursor: pointer;
  &.active {
    border-bottom: 2px dashed;
    font-weight: bold;
    color: ${designSystem.color('blue')};
  }
`

const languageName = {
  en: 'english',
  ja: 'japanese',
}

interface IntlContextConsumerProps {
  languages: string[]
  originalPath: string
}

const LanguageSwitcher = () => (
  <IntlContextConsumer>
    {({ languages, originalPath }: IntlContextConsumerProps) =>
      languages.map(language => (
        <Link
          key={language}
          language={language}
          to={originalPath}
          style={{
            color: `red`,
            margin: 10,
            textDecoration: `underline`,
          }}
        >
          {languageName[language]}
        </Link>
      ))
    }
  </IntlContextConsumer>
)

// const LanguageSwitcher = ({ selectedLanguage, languages, onClick }: Props) => {
//   if (languages === null) {
//     return null
//   }
//   return (
//     <Wrapper>
//       {Object.keys(languages).map((langKey: Language) => {
//         return (
//           <LanguageSwitch
//             id={`lang-${langKey}`}
//             key={langKey}
//             className={selectedLanguage === langKey ? 'active' : ''}
//             onClick={(e: any) => onClick(langKey, e)}
//           >
//             {langKey}
//           </LanguageSwitch>
//         )
//       })}
//     </Wrapper>
//   )
// }

export default LanguageSwitcher
