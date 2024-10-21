import { useAddFile } from '@/lib/UseAddFile';
import React from 'react'

const AddFolder = () => {
    const {isOpenDialogFolder} = useAddFile()

    console.log(isOpenDialogFolder);
  return (
    <div>AddFolder</div>
  )
}

export default AddFolder