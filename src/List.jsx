import React from 'react'

const List = (props) => {
    const {people} = props;

  return (
    <div>
        {people.map((person)=>{
            const{id,name, img, age} = person;
            return (
            <article className="person" key={id}>
                <img src={img}e alt="profile img" />
                <div>
                    <h4>{name}</h4>
                    <p>{age} years old</p>
                </div>
            </article>
            );
        })}
    </div>
  )
}

export default List