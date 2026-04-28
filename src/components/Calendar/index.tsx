import React from 'react';
import { hy } from "react-day-picker/locale";
import { DayPicker, getDefaultClassNames, type DayPickerProps } from "react-day-picker";

export const Calendar: React.FC<DayPickerProps> = ({ ...props }) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      classNames={{
        today: 'border-2 border-white',
        selected: "border-2 border-white",
        day: `${defaultClassNames.day} text-white text-[28px]`,
        weekday: `${defaultClassNames.weekday} text-white text-[18px]!`,
        month_caption: `${defaultClassNames.caption_label} text-[52px] font-bold text-white mb-[24px]`,
        day_button: 'cursor-default',
      }}
      hideNavigation
      navLayout="around"
      timeZone="Asia/Yerevan"
      weekStartsOn={1}
      locale={hy}
      mode="single"
      onSelect={() => {}}
      {...props}
    />
  )
};
