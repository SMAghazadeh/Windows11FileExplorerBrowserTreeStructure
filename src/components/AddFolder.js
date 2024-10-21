import { useAddFile } from '@/lib/UseAddFile';
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useStore, AddTreeData } from '@/lib/store';
import { Button } from './ui/button';



const AddFolder = () => {
    const { isOpenDialogFolder, setIsOpenDialogFolder, setAddId, AddIdForFolder, AddNameForFolder, setAddName } = useAddFile();
    const { treeData ,AddTreeData} = useStore()
    const [isvalidID, setIsValidID] = useState()

    useEffect(() => {
        if (AddIdForFolder && treeData.includes(AddIdForFolder)) {
            setIsValidID(false)
        } else {
            setIsValidID(true)
        }
    }, [AddIdForFolder, treeData])
    return (
        <Dialog className="border" open={isOpenDialogFolder} onOpenChange={() => setIsOpenDialogFolder()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center">افزودن فولدر</DialogTitle>
                    <DialogDescription>
                        <div className='flex flex-col gap-2'>
                            <Input
                                type='text'
                                onChange={(e) => setAddId(e.target.value)}
                                value={AddIdForFolder}
                                className={`${isvalidID ? 'text-red-900' : 'text-green-500'}`}
                                placeholder="ID"
                            />
                            <Input
                                type='text'
                                onChange={(e) => setAddName(e.target.value)}
                                value={AddNameForFolder}
                                placeholder="Name"
                            />
                        </div>
                        <Button onClick={()=> AddTreeData(AddIdForFolder,AddNameForFolder)}>افزودن</Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default AddFolder