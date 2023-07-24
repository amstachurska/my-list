// import React from 'react'
// import CreatableSelect from 'react-select/creatable'
// import { Field } from 'formik'
// import Select from 'react-select'
// import styled from 'styled-components'
// import { genreOptions, statusOptions } from './constans'

// const genreSelectOptions = genreOptions.map((genre) => ({
//   value: genre,
//   label: genre,
// }))

// const AnimeGeneralInfoStyled = styled.div`
//   .anime-info-header {
//     margin: 16px;
//     border-bottom: 2px dotted #a35a23;
//     display: inline-block;
//     padding: 8px;
//   }
//   .anime-info-item {
//     background-color: #f34f23;
//     padding: 16px;
//     margin: 16px;
//     border: 4px solid #a35a23;
//     border-radius: 4px;
//     width: 50%;
//   }
//   label {
//     padding-right: 8px;
//   }
//   input,
//   #status > div,
//   #genres > div {
//     background-color: #dadaa1;
//     border: 1px solid brown;
//     outline: none;
//   }
//   input {
//     padding: 8px;
//   }
// `

// const AnimeGeneralInformation = ({ values }) => {
//   return (
//     <AnimeGeneralInfoStyled>
//       <h2 className="anime-info-header">General information about anime</h2>
//       <div className="anime-info-item">
//         <label htmlFor="title">Title</label>
//         <Field name="title" component="input" label="Title" id="title" />
//       </div>
//       <div className="anime-info-item">
//         <label for="genres">Genres</label>
//         <Field
//           component={CreatableSelect}
//           defaultValue={[genreSelectOptions[0], genreSelectOptions[1]]}
//           isMulti
//           label="Genres"
//           name="genres"
//           id="genres"
//           options={genreSelectOptions}
//         />
//       </div>
//       <div className="anime-info-item">
//         <label for="status">Status</label>
//         <Field
//           component={Select}
//           label="Status"
//           name="status"
//           id="status"
//           options={statusOptions}
//         />
//         Title Genres list select multiple status episodes - list of object
//         season nrOfEpisodes status specials nrOfCurrentEpisode
//       </div>
//     </AnimeGeneralInfoStyled>
//   )
// }

// export default AnimeGeneralInformation
