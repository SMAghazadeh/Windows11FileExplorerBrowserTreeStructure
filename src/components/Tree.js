'use client'
import { useStore } from "@/lib/store";
import React from "react";
import { TreeNode } from "./TreeNode";


export const Tree = () => {
    const { treeData } = useStore();

    return (
        <div>
            <h1 className="text-center text-[30px] ">Windows 11 file explorer browser tree structure</h1>
            <div>
                {treeData.map((node) => (
                    <TreeNode key={node.id} node={node} />
                ))}
            </div>
        </div>
    );
}
