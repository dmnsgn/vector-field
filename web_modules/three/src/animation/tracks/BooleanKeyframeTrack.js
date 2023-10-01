import { InterpolateDiscrete } from '../../constants.js';
import { KeyframeTrack } from '../KeyframeTrack.js';
import '../../math/interpolants/CubicInterpolant.js';
import '../../math/Interpolant.js';
import '../../math/interpolants/LinearInterpolant.js';
import '../../math/interpolants/DiscreteInterpolant.js';
import '../AnimationUtils.js';
import '../../math/Quaternion.js';
import '../../math/MathUtils.js';

/**
 * A Track of Boolean keyframe values.
 */ class BooleanKeyframeTrack extends KeyframeTrack {
}
BooleanKeyframeTrack.prototype.ValueTypeName = 'bool';
BooleanKeyframeTrack.prototype.ValueBufferType = Array;
BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = undefined;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = undefined;

export { BooleanKeyframeTrack };
