// import React from 'react'
// import { DatePicker, Rate } from 'antd'
// import { Field } from 'formik'
// import styled from 'styled-components'
// import 'antd/dist/antd.css'

// const AnimeOpinionStyled = styled.div`
//   background-color: #d2d2e3;
//   border: 2px solid #558898;
//   border-radius: 50px;
//   margin: 8px 32px;
//   padding: 8px 32px;

//   .anime-opinion-header {
//     color: #095509;
//     margin: 16px;
//     padding: 16px;
//     text-align: center;
//   }
//   .anime-opinion-item {
//     background-color: #d2f2f3;
//     border: 2px solid #335865;
//     border-radius: 5px;
//     margin: 16px auto;
//     padding: 16px;
//     width: 40%;
//   }
//   label {
//     padding-right: 10px;
//   }
//   #opinion. #date {
//     padding: 8px;
//   }
// `

// const AnimeOpinion = (props) => {
//   console.log('props', props)
//   return (
//     <AnimeOpinionStyled>
//       <h2 className="anime-opinion-header">Opinion about anime</h2>
//       <div className="anime-opinion-item">
//         <label htmlFor="opinion">Opinion</label>
//         <Field name="opinion" id="opinion" />
//       </div>
//       <div className="anime-opinion-item">
//         <label htmlFor="ranking">Ranking</label>

//         <Rate
//           name="ranking"
//           id="ranking"
//           value={props.values.ranking}
//           onChange={(value) => props.setFieldValue('ranking', value)}
//         />
//       </div>
//       <div className="anime-opinion-item">
//         <label htmlFor="date">Date</label>
//         <DatePicker
//           name="date"
//           id="date"
//           value={props.values.date}
//           onChange={(value) => props.setFieldValue('date', value)}
//         />
//       </div>
//     </AnimeOpinionStyled>
//   )
// }

// AnimeOpinion.propTypes = {}

// export default AnimeOpinion
