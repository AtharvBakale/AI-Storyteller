"use client";

import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

function StoryWriter() {
  return (
    <div className="flex flex-col mr-auto ml-auto pr-8 pl-8 w-full">
      <section className="flex-1 flex flex-col border border-purple-300 rounded-md p-10 space-y-2">
        <Textarea placeholder="Write A Story About A Robot And A Human Who Become Friends..." />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="How Many Pages Should The Story Be?" />
          </SelectTrigger>

          <SelectContent className="w-4">
            {Array.from({ length: 10 }, (_, i) => (
              <SelectItem key={i} value={String(i + 1)}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button className="w-full">Generate Story</Button>
      </section>

      <section className="flex-1 pb-5 mt-5"></section>
    </div>
  );
}

export default StoryWriter;
