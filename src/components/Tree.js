'use client'
import { useStore } from "@/lib/store";
import React from "react";
import { TreeNode } from "./TreeNode";


export const Tree = () => {
    const { treeData } = useStore();

    return (
        <div className="flex flex-col gap-14">
            <h1 className="text-center text-[30px] text-white">Windows 11 file explorer browser tree structure</h1>
            <div className="border h-full m-5 p-5 bg-slate-50 rounded-lg">
                {treeData.map((node) => (
                    <TreeNode key={node.id} node={node} />
                ))}
            </div>
        </div>
    );
}
