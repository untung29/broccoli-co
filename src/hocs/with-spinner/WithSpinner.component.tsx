export type TWithSpinner = {
  isLoading: boolean;
};

const WithSpinner = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return ({ isLoading, ...props }: TWithSpinner & P) => {
    if (isLoading) {
      return <div className="spinner">Loading...</div>;
    }

    return <WrappedComponent {...(props as P)} />;
  };
};

export default WithSpinner;
