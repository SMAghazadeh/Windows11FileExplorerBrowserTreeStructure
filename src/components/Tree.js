'use client'
import { useStore } from "@/lib/store";
import React from "react";
import { TreeNode } from "./TreeNode";
import { ShowContentFile } from "./ShowContentFile";
import { Button } from "@/components/ui/button"
import { FilePlus2, FolderPlus } from "lucide-react";
import { useAddFile } from "@/lib/UseAddFile";
import AddFolder from "./AddFolder";


export const Tree = () => {
    const { treeData } = useStore();
    const {setIsOpenDialogFolder ,isOpenDialogFolder} = useAddFile()

    return (
        <div className="flex flex-col  ">
            <h1 className="text-center text-[30px] text-white">Windows 11 file explorer browser tree structure</h1>

            <div className=" h-full m-5 p-5 bg-slate-100 rounded-lg flex  ">
                <div className=" gap-2 flex flex-col">
                   <Button
                        variant="outline" size="icon"
                        className="bg-yellow-300"
                        onClick = {()=> setIsOpenDialogFolder()}
                    >
                        <FolderPlus className="h-4 w-4" />
                    </Button>
                   
                    {treeData.map((node) => (
                        <TreeNode key={node.id} node={node} />
                    ))}
                </div>
                <div className=" items-center  w-full rounded-lg text-center bg-slate-50">
                    <ShowContentFile />
                </div>

                {isOpenDialogFolder && <AddFolder />}
            </div>
        </div>
    );
}
