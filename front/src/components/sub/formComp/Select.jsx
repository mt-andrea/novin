import React from 'react'

const Select = () => {
    return (
        <div className='col-lg-4'>
            <label htmlFor={props.id}>Partner</label>
            <select className='form-control p-1' id={props.id} name={props.id} value={props.value} onChange={props.change}>
                <option value={'0'} selected>-- Select --</option>
                {props.object && props.object.length > 0 && props.object.map(
                    (item) =>
                        <option value={item.id}>{item.name}</option>
                )}
            </select>
        </div>
    )
}

export default Select