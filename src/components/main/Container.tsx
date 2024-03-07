const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto h-full max-w-[1200px] px-5">{children}</div>;
};

export default Container;
