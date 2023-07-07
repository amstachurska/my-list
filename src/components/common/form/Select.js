import React from 'react'
import classNames from 'class-names'
import {get} from 'lodash'
import PropTypes from 'prop-types'
import Select from 'react-select'

const customStyles = {
    option: (provided, state) => ({
      ...provided,
    //   backgroundColor: '#d8bec0',
      borderBottom: '1px dotted pink',
      borderRadius: '5px',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: '#d8bec0',
        // width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        // color: state.selectProps.menuColor,
        padding: 20,
      }),
    control: () => ({
        backgroundColor: '#d8bec0',
        display: 'flex',
      // none of react-select's styles are passed to <Control />
    //   width: '400px',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    },
    multiValue: (provided, state) => ({
        ...provided,
        backgroundColor: '#c06b87',
        borderRadius: '5px',
    })
  }

const SelectField = (props) => {
    const {input, label, wrapperClassName} = props
    // const value = get(input, 'value') ? options.filter(item => item.value === get(input, 'value'))[0] : get(props, 'value', '')
    return (
        <div className={classNames('select', {[wrapperClassName]: !!wrapperClassName})}>
            {label && (<label className="select__label" htmlFor={get(props, 'id') ? props.id : get(props, 'input.name')}>{label}</label>)}
            <Select 
                className="select__field"
                styles={customStyles}
                id={input.name}
                {...props}
                onChange={get(input, 'onChange') ? get(input, 'onChange') : get(props, 'onChange', () => {})}
                name={get(input, "name") ? get(input, 'name') : get(props, 'name')}
                {...input} 
                value={input.value}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                // value={value}
                onBlur={() => {}}
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#c09b97',
                      primary: 'black',
                    }
                })}
            />
        </div>
    )
}

Select.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    wrapperClassName: PropTypes.string,
}

export default SelectField
