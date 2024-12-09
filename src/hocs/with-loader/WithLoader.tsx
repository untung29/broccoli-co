import { Loader } from "@mantine/core";

export type TWithSpinner = {
  isLoading: boolean;
};

const WithLoader = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return ({ isLoading, ...props }: TWithSpinner & P) => {
    if (isLoading) {
      return <Loader color="blue" />;
    }

    return <WrappedComponent {...(props as P)} />;
  };
};

export default WithLoader;
