import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {
  const renderInputByComponentType = ({ controlItem }) => {
    const types = controlItem.componenttype;
    const element = null;
    const value = formData[controlItem.name];
    switch (types) {
      case "input":
        element = (
          <Input
            name={controlItem.name}
            id={controlItem.name}
            type={controlItem.type}
            placeholder={controlItem.placeholder}
            value={value}
            onChange={(event) => {
              setFormData(
                ...formData,
                ([controlItem.name] = event.target.value)
              );
            }}
          />
        );
        break;
      case "select":
        element = (
          <Select
            value={value}
            onChange={(value) => {
              setFormData(...formData, ([controlItem.name] = value));
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {controlItem.option &&
                controlItem.option.map((opt) => {
                  <SelectItem value={opt.id} key={opt.lable}>
                    {opt}
                  </SelectItem>;
                })}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            value={value}
            name={controlItem.name}
            id={controlItem.name}
            type={controlItem.type}
            placeholder={controlItem.placeholder}
            onChange={(event) => {
              setFormData(
                ...formData,
                ([controlItem.name] = event.target.value)
              );
            }}
          />
        );
        break;
      default:
        return null;
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => {
          <div className="grid w-full gap-1.5">
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputByComponentType(controlItem)}
          </div>;
        })}
      </div>
      <Button type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
