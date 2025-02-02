import { FullPageLoading } from '@shared/components/FullPageLoading';

interface WithLoadingAndErrorProps {
  loading: boolean;
  error: Error | null;
}

export function withLoadingAndError<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithLoadingAndErrorComponent(
    props: P & WithLoadingAndErrorProps
  ) {
    if (props.loading)
      return <FullPageLoading />;

    if (props.error)
      return (
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-red-500">Error: {props.error.message}</p>
        </div>
      );

    return <WrappedComponent {...(props as P)} />;
  };
}
