import React from 'react';

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const DEFAULT_COLOR = '#000000';

export class CircleMinus extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" />
                </svg>
            </span>);
    }
}

export class CirclePlus extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                </svg>
            </span>);
    }
}

export class SquareMinus extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;
        const svgStyle = getIconStyle(style).style;

        return (<span {...rest}>
                <svg
                    fill={svgStyle.color}
                    width={svgStyle.height}
                    height={svgStyle.width}
                    style={svgStyle}
                    viewBox="0 0 1792 1792"
                >
                    <path
                        d="M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" />
                </svg>
            </span>);
    }
}

export class SquarePlus extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;
        const svgStyle = getIconStyle(style).style;

        return (<span {...rest}>
                <svg
                    fill={svgStyle.color}
                    width={svgStyle.height}
                    height={svgStyle.width}
                    style={svgStyle}
                    viewBox="0 0 1792 1792"
                >
                    <path
                        d="M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" />
                </svg>
            </span>);
    }
}

export class ArrowRight extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg
                    style={{
                        ...getIconStyle(style).style, paddingLeft: '2px', verticalAlign: 'top'
                    }}
                    viewBox="0 0 15 15"
                    fill="currentColor"
                >
                    <path d="M0 14l6-6-6-6z"></path>
                </svg>
            </span>);
    }
}

export class ArrowDown extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg
                    style={{
                        ...getIconStyle(style).style, paddingLeft: '2px', verticalAlign: 'top'
                    }}
                    viewBox="0 0 15 15"
                    fill="currentColor"
                >
                    <path d="M0 5l6 6 6-6z"></path>
                </svg>
            </span>);
    }
}

export class Clippy extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg     {...getIconStyle(style)}
                         viewBox="0 0 40 40"
                         fill="currentColor"
                         preserveAspectRatio="xMidYMid meet">
                    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                       transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <path
                            d="M 49.933 10.846 V 8.024 c 0 -2.724 -2.208 -4.933 -4.933 -4.933 h 0 c -2.724 0 -4.933 2.208 -4.933 4.933 v 2.822 L 49.933 10.846 z"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(176,182,188); fill-rule: nonzero; opacity: 1;"
                            transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path
                            d="M 55.532 79.468 C 55.532 85.285 50.817 90 45 90 s -10.532 -4.715 -10.532 -10.532 C 41.489 75.308 48.511 75.308 55.532 79.468 z"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(176,182,188); fill-rule: nonzero; opacity: 1;"
                            transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path
                            d="M 83.428 67.918 h -1.302 c -3.949 0 -7.15 -3.201 -7.15 -7.15 V 40.417 c 0 -16.555 -13.421 -29.976 -29.976 -29.976 S 15.024 23.862 15.024 40.417 v 20.351 c 0 3.949 -3.201 7.15 -7.15 7.15 H 6.572 c -3.19 0 -5.775 2.586 -5.775 5.775 c 0 3.19 2.586 5.775 5.775 5.775 h 1.302 H 45 h 37.126 h 1.302 c 3.19 0 5.775 -2.586 5.775 -5.775 C 89.203 70.503 86.618 67.918 83.428 67.918 z"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(231,78,58); fill-rule: nonzero; opacity: 1;"
                            transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path
                            d="M 10.679 26.547 c -0.126 0 -0.254 -0.024 -0.379 -0.074 c -0.517 -0.209 -0.768 -0.799 -0.558 -1.317 C 13.429 16.04 20.712 8.55 29.725 4.607 c 0.512 -0.225 1.109 0.009 1.332 0.521 c 0.224 0.512 -0.009 1.108 -0.521 1.332 c -8.533 3.733 -15.429 10.824 -18.919 19.455 C 11.458 26.308 11.079 26.547 10.679 26.547 z"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,224,235); fill-rule: nonzero; opacity: 1;"
                            transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path
                            d="M 6.525 17.144 c -0.171 0 -0.345 -0.043 -0.505 -0.135 c -0.484 -0.279 -0.649 -0.898 -0.37 -1.382 C 9.241 9.408 14.329 4.061 20.366 0.162 c 0.468 -0.304 1.095 -0.168 1.398 0.301 c 0.303 0.469 0.168 1.095 -0.301 1.398 c -5.768 3.725 -10.631 8.835 -14.061 14.777 C 7.214 16.963 6.874 17.144 6.525 17.144 z"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,224,235); fill-rule: nonzero; opacity: 1;"
                            transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path
                            d="M 79.321 26.547 c -0.4 0 -0.778 -0.239 -0.937 -0.633 c -3.491 -8.631 -10.387 -15.721 -18.919 -19.455 c -0.513 -0.224 -0.746 -0.82 -0.521 -1.332 c 0.223 -0.512 0.821 -0.747 1.331 -0.521 C 69.287 8.55 76.571 16.04 80.258 25.156 c 0.209 0.518 -0.04 1.108 -0.558 1.317 C 79.575 26.523 79.447 26.547 79.321 26.547 z"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,224,235); fill-rule: nonzero; opacity: 1;"
                            transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path
                            d="M 83.475 17.144 c -0.35 0 -0.689 -0.181 -0.877 -0.506 c -3.431 -5.942 -8.293 -11.052 -14.062 -14.777 c -0.469 -0.303 -0.603 -0.929 -0.3 -1.398 c 0.302 -0.469 0.927 -0.604 1.398 -0.301 c 6.037 3.898 11.126 9.246 14.716 15.465 c 0.279 0.484 0.114 1.102 -0.37 1.382 C 83.821 17.101 83.647 17.144 83.475 17.144 z"
                            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,224,235); fill-rule: nonzero; opacity: 1;"
                            transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    </g>
                </svg>
            </span>);
    }
}

export class RemoveCircle extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path
                            d="m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
                    </g>
                </svg>
            </span>);
    }
}

export class AddCircle extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path
                            d="m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
                    </g>
                </svg>
            </span>);
    }
}

export class Add extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z" />
                    </g>
                </svg>
            </span>);
    }
}

export class Edit extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path
                            d="m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z" />
                    </g>
                </svg>
            </span>);
    }
}

export class CheckCircle extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (<span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path
                            d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
                    </g>
                </svg>
            </span>);
    }
}

function getIconStyle(style) {
    if (!style) {
        style = {};
    }
    return {
        style: {
            verticalAlign: 'middle', ...style,
            color: style.color ? style.color : DEFAULT_COLOR,
            height: '1em',
            width: '1em'
        }
    };
}