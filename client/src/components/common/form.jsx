import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText }) {
  const renderInputByComponentType = (controlItem) => {
    const { componentType, name, type, placeholder, option } = controlItem;
    const value = formData[name];
    let element = null;

    switch (componentType) {
      case "input":
        element = (
          <Input
            name={name}
            id={name}
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                [name]: event.target.value,
              }));
            }}
          />
        );
        break;

      case "select":
        element = (
          <Select
            value={value || ""}
            onValueChange={(selectedValue) => {
              setFormData((prev) => ({
                ...prev,
                [name]: selectedValue,
              }));
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {option &&
                option.map((opt) => (
                  <SelectItem value={opt.id} key={opt.id}>
                    {opt.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            name={name}
            id={name}
            placeholder={placeholder}
            value={value || ""}
            onChange={(event) => {
              setFormData((prev) => ({
                ...prev,
                [name]: event.target.value,
              }));
            }}
          />
        );
        break;

      default:
        return null;
    }
    return element;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls?.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label htmlFor={controlItem.name} className="mb-1">
              {controlItem.label}
            </Label>
            {renderInputByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-8 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
