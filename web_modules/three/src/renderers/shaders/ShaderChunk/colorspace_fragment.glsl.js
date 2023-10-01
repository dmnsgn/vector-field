var colorspace_fragment = /* glsl */ `
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;

export { colorspace_fragment as default };
