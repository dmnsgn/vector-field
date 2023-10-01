import { KeyframeTrack } from '../KeyframeTrack.js';
import '../../constants.js';
import '../../math/interpolants/CubicInterpolant.js';
import '../../math/Interpolant.js';
import '../../math/interpolants/LinearInterpolant.js';
import '../../math/interpolants/DiscreteInterpolant.js';
import '../AnimationUtils.js';
import '../../math/Quaternion.js';
import '../../math/MathUtils.js';

/**
 * A Track of keyframe values that represent color.
 */ class ColorKeyframeTrack extends KeyframeTrack {
}
ColorKeyframeTrack.prototype.ValueTypeName = 'color';

export { ColorKeyframeTrack };
