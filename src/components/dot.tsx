interface DotProps {
  // Исправлено: Название интерфейса с заглавной буквы
  color?: string; // Сделал color опциональным
}

const Dot = ({ color = "bg-dotColor" }: DotProps) => {
  return (
    <div className={`w-3 h-3 ${color} rounded-full dark:bg-dotWhiteMode`}></div>
  );
};

export default Dot;
