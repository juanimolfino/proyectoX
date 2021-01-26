import React from 'react'; // { useState, useEffect, useRef }

export default function GenderComponent({ data }) { 
       return (
           
                    <option value={data.gender}>{data.gender}</option>
               
        )
    }

