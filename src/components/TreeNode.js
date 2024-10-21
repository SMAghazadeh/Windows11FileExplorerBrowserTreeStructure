const { useStore } = require("@/lib/store");
import { Button } from "@/components/ui/button"
import { File, FolderClosed, FolderOpenDot } from "lucide-react";

export const TreeNode = ({ node }) => {
    //state
    const { toggleFolder, selectItem, selectedItem ,selectItemForChild ,isSelectedChild ,isSelectedMainFolder ,selectTextForShow} = useStore();
    const isSelected = selectedItem === node.id;

    //render
    return (
        <>
            <div>
                {node.type === 'folder' && (
                    <Button
                        onClick={() => { selectItem(node.id), toggleFolder(node.id) }}
                        variant="ghost"
                        className={`hover:bg-blue-400 ${isSelectedMainFolder && node.isOpen && 'bg-blue-500'}
                         h-fit text-xs`}
                    >
                        {isSelected && node.isOpen ? (
                            <>
                                <FolderOpenDot className="w-5 h-5 " color="blue" /> <span>{node.name}</span>

                            </>
                        ) : (
                            <>
                                < FolderClosed className="w-5 h-5 " color="yellow" /> <span>{node.name}</span>
                            </>
                        )}
                    </Button>
                )}

                {node.type === 'file' && (
                    <Button
                        variant="ghost"
                        onClick={()=> {
                            selectItemForChild(node.id)
                            selectTextForShow(node?.text)
                        }}
                        className={`hover:bg-blue-400 ${isSelectedChild === node.id && 'bg-blue-400'} text-xs`}
                    >
                        < File className="w-5 h-5 " color="yellow" />{node.name}
                    </Button>
                )}

                {node.isOpen && node.children && (
                    <>
                        <div className="mr-6">
                            {node.children.map((child) => (
                                <TreeNode key={node.id} node={child} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};