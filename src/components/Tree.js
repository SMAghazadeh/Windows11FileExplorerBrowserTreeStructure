'use client'
import { useStore } from "@/lib/store";
import React from "react";
import { TreeNode } from "./TreeNode";
import { ShowContentFile } from "./ShowContentFile";


export const Tree = () => {
    const { treeData } = useStore();

    return (
        <div className="flex flex-col  ">
            <h1 className="text-center text-[30px] text-white">Windows 11 file explorer browser tree structure</h1>

            <div className=" h-full m-5 p-5 bg-slate-100 rounded-lg flex  ">
                <div className="  flex flex-col">
                    {treeData.map((node) => (
                        <TreeNode key={node.id} node={node} />
                    ))}
                </div>
                <div className=" items-center  w-full rounded-lg text-center bg-slate-50">
                    <ShowContentFile />
                </div>
            </div>
        </div>
    );
}
