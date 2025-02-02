export function FullPageLoading() {
  return (
    <div className="flex items-center justify-center h-screen" data-test-id="loading-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="150px">
        <circle
          fill="#208FD8"
          stroke="#208FD8"
          strokeWidth={15}
          r={15}
          cx={40}
          cy={100}
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur={2}
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin={-0.4}
          />
        </circle>
        <circle
          fill="#208FD8"
          stroke="#208FD8"
          strokeWidth={15}
          r={15}
          cx={100}
          cy={100}
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur={2}
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin={-0.2}
          />
        </circle>
        <circle
          fill="#208FD8"
          stroke="#208FD8"
          strokeWidth={15}
          r={15}
          cx={160}
          cy={100}
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur={2}
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin={0}
          />
        </circle>
      </svg>
    </div>
  )
}
