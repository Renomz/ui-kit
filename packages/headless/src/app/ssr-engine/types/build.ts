import {CoreEngine} from '../../engine';
import {
  ControllersMap,
  ControllersPropsMap,
  EngineAndControllers,
  OptionsExtender,
} from './common';

export interface EngineDefinitionBuildOptionsWithoutProps<TEngineOptions> {
  extend?: OptionsExtender<TEngineOptions>;
}

export interface EngineDefinitionBuildOptionsWithProps<
  TEngineOptions,
  TControllersProps extends ControllersPropsMap
> extends EngineDefinitionBuildOptionsWithoutProps<TEngineOptions> {
  controllers: TControllersProps;
}

export interface BuildWithProps<
  TEngine extends CoreEngine,
  TEngineOptions,
  TControllersMap extends ControllersMap,
  TControllersProps extends ControllersPropsMap
> {
  /**
   * Initializes an engine and controllers from the definition.
   */
  build(
    options: EngineDefinitionBuildOptionsWithProps<
      TEngineOptions,
      TControllersProps
    >
  ): Promise<EngineAndControllers<TEngine, TControllersMap>>;
}

export interface BuildWithoutProps<
  TEngine extends CoreEngine,
  TEngineOptions,
  TControllersMap extends ControllersMap
> {
  /**
   * Initializes an engine and controllers from the definition.
   */
  build(
    options?: EngineDefinitionBuildOptionsWithoutProps<TEngineOptions>
  ): Promise<EngineAndControllers<TEngine, TControllersMap>>;
}