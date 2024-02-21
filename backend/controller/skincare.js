const allskincare =  (req,res) => {
    res.json({message:'all skincare'})
}


const createSkincare = (req,res) => {
    res.json({message:'create a new product'})
}

const detailSkincare = (req,res) => {
    res.json({message:'details'})
}

const updateSkincare = (req,res) => {
    res.json({message: 'Update a skincare'})
}

const deleteSkincare = (req,res) => {
    res.json({message:'delete a skincare'})
}
export {allskincare,createSkincare,detailSkincare,updateSkincare,deleteSkincare}