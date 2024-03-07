import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import ToolBar from "./ToolBar";

import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import { Loader } from "lucide-react";

type TipTapProps = {
  description: string;
  onChange: (value: string) => void;
};

export const Tiptap = ({ description, onChange }: TipTapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        HTMLAttributes: {
          class: "text-2xl",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc pl-9",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal pl-9",
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "rounded-md border border-input text-lg bg-backround px-8 py-5 min-h-[400px] disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (description !== editor?.getHTML()) {
      editor?.commands.setContent(description);
    }
  }, [description, editor]);

  if (!editor)
    return (
      <Loader className="h-[30px] w-[30px] animate-spin object-contain text-black" />
    );

  return (
    <div className="space-y-3">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
