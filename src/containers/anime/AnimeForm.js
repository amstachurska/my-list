import React, { useState } from 'react'
import { Formik } from 'formik'
import { Prompt } from 'react-router-dom'
// import { isEmpty } from 'lodash'
// import PropTypes from 'prop-types'

import AnimeGeneralInformation from './AnimeGeneralInformation'
import AnimeManga from './AnimeManga'
import AnimeNavigation from './AnimeNavigation'
import AnimeOpinion from './AnimeOpinion'
import AnimeCreators from './AnimeCreators'

const AnimeForm = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const steps = [
    {
      component: AnimeGeneralInformation,
      extraProps: {},
      heading: 'Anime general information',
      validationSchema: null,
      trackingName: 'AnimeGeneralInfo',
    },
    {
      component: AnimeOpinion,
      extraProps: {},
      heading: 'Opinion',
      valiadationSchema: null,
      trackingName: 'AnimeOpinion',
    },
    {
      component: AnimeManga,
      extraProps: {},
      heading: 'Anime-linked manga',
      validationSchema: null,
      trackingName: 'AnimeManga',
    },
    {
      component: AnimeCreators,
      extraProps: {},
      heading: 'Creators',
      validationSchema: null,
      trackingName: 'AnimeCreators',
    },
  ]

  const Page = steps[pageIndex].component
  // const validationSchema = steps[pageIndex].validationSchema
  const extraProps = steps[pageIndex].extraProps
  const headings = steps.map(({ heading }) => heading)

  const nextStep = () => {
    window.scrollTo(0, 0)
    setPageIndex((currentIndex) => Math.min(steps.length - 1, currentIndex + 1))
  }

  const prevStep = () => {
    window.scrollTo(0, 0)
    setPageIndex((currentIndex) => Math.max(0, currentIndex - 1))
  }

  const goToPage = (index) => {
    window.scrollTo(0, 0)
    setPageIndex(index)
  }

  return (
    <Formik
      initialValues={{}}
      render={(formikProps) => (
        <>
          {console.log('va', formikProps.values)}
          <AnimeNavigation
            formikProps={formikProps}
            goToPage={goToPage}
            headings={headings}
            pageIndex={pageIndex}
          />
          <div>
            <Page
              {...formikProps}
              {...extraProps}
              nextStep={nextStep}
              prevStep={prevStep}
            />
            <Prompt
              when={true}
              message={JSON.stringify(
                `{
                    "titleText": "Are you sure you want to leave a page before saving data?",
                    "confirmText": "Yes, I am sure",
                    "messageText: "You are creating or editing anime",
                    "cancelText": "No, I want to stay on the page"
                }`
              )}
            />
            {/* nie dziala z jak rowniez bez withRouter */}
          </div>
        </>
      )}
    />
  )
}

AnimeForm.propTypes = {}

export default AnimeForm
