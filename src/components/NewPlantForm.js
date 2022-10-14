import React from "react";

function NewPlantForm() {
 function handleSubmit(e){
  e.preventDefault()
  const formData = {}
 }
 function handleNameChange(event) {
  setPlantName(event.target.value);
}function handleImgChange(event) {
  setImg(event.target.value);
}function handlePriceChange(event) {
  setPlantPrice(event.target.value);
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleNameChange} value={plantName} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleImgChange} value={img}/>
        <input type="number" name="price" step="0.01" placeholder="Price"onChange={handlePriceChange} value={plantPrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
