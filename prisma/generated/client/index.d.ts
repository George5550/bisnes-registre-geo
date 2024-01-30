
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DocMain
 * 
 */
export type DocMain = $Result.DefaultSelection<Prisma.$DocMainPayload>
/**
 * Model Legal_Forms
 * 
 */
export type Legal_Forms = $Result.DefaultSelection<Prisma.$Legal_FormsPayload>
/**
 * Model Ownership_Types
 * 
 */
export type Ownership_Types = $Result.DefaultSelection<Prisma.$Ownership_TypesPayload>
/**
 * Model Size
 * 
 */
export type Size = $Result.DefaultSelection<Prisma.$SizePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DocMains
 * const docMains = await prisma.docMain.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DocMains
   * const docMains = await prisma.docMain.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.docMain`: Exposes CRUD operations for the **DocMain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocMains
    * const docMains = await prisma.docMain.findMany()
    * ```
    */
  get docMain(): Prisma.DocMainDelegate<ExtArgs>;

  /**
   * `prisma.legal_Forms`: Exposes CRUD operations for the **Legal_Forms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legal_Forms
    * const legal_Forms = await prisma.legal_Forms.findMany()
    * ```
    */
  get legal_Forms(): Prisma.Legal_FormsDelegate<ExtArgs>;

  /**
   * `prisma.ownership_Types`: Exposes CRUD operations for the **Ownership_Types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ownership_Types
    * const ownership_Types = await prisma.ownership_Types.findMany()
    * ```
    */
  get ownership_Types(): Prisma.Ownership_TypesDelegate<ExtArgs>;

  /**
   * `prisma.size`: Exposes CRUD operations for the **Size** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.size.findMany()
    * ```
    */
  get size(): Prisma.SizeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DocMain: 'DocMain',
    Legal_Forms: 'Legal_Forms',
    Ownership_Types: 'Ownership_Types',
    Size: 'Size'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'docMain' | 'legal_Forms' | 'ownership_Types' | 'size'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      DocMain: {
        payload: Prisma.$DocMainPayload<ExtArgs>
        fields: Prisma.DocMainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocMainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocMainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocMainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocMainPayload>
          }
          findFirst: {
            args: Prisma.DocMainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocMainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocMainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocMainPayload>
          }
          findMany: {
            args: Prisma.DocMainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocMainPayload>[]
          }
          create: {
            args: Prisma.DocMainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocMainPayload>
          }
          createMany: {
            args: Prisma.DocMainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DocMainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocMainPayload>
          }
          update: {
            args: Prisma.DocMainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocMainPayload>
          }
          deleteMany: {
            args: Prisma.DocMainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DocMainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DocMainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DocMainPayload>
          }
          aggregate: {
            args: Prisma.DocMainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDocMain>
          }
          groupBy: {
            args: Prisma.DocMainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DocMainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocMainCountArgs<ExtArgs>,
            result: $Utils.Optional<DocMainCountAggregateOutputType> | number
          }
        }
      }
      Legal_Forms: {
        payload: Prisma.$Legal_FormsPayload<ExtArgs>
        fields: Prisma.Legal_FormsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Legal_FormsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Legal_FormsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Legal_FormsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Legal_FormsPayload>
          }
          findFirst: {
            args: Prisma.Legal_FormsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Legal_FormsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Legal_FormsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Legal_FormsPayload>
          }
          findMany: {
            args: Prisma.Legal_FormsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Legal_FormsPayload>[]
          }
          create: {
            args: Prisma.Legal_FormsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Legal_FormsPayload>
          }
          createMany: {
            args: Prisma.Legal_FormsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Legal_FormsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Legal_FormsPayload>
          }
          update: {
            args: Prisma.Legal_FormsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Legal_FormsPayload>
          }
          deleteMany: {
            args: Prisma.Legal_FormsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Legal_FormsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Legal_FormsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Legal_FormsPayload>
          }
          aggregate: {
            args: Prisma.Legal_FormsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLegal_Forms>
          }
          groupBy: {
            args: Prisma.Legal_FormsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Legal_FormsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Legal_FormsCountArgs<ExtArgs>,
            result: $Utils.Optional<Legal_FormsCountAggregateOutputType> | number
          }
        }
      }
      Ownership_Types: {
        payload: Prisma.$Ownership_TypesPayload<ExtArgs>
        fields: Prisma.Ownership_TypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Ownership_TypesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Ownership_TypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Ownership_TypesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Ownership_TypesPayload>
          }
          findFirst: {
            args: Prisma.Ownership_TypesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Ownership_TypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Ownership_TypesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Ownership_TypesPayload>
          }
          findMany: {
            args: Prisma.Ownership_TypesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Ownership_TypesPayload>[]
          }
          create: {
            args: Prisma.Ownership_TypesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Ownership_TypesPayload>
          }
          createMany: {
            args: Prisma.Ownership_TypesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Ownership_TypesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Ownership_TypesPayload>
          }
          update: {
            args: Prisma.Ownership_TypesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Ownership_TypesPayload>
          }
          deleteMany: {
            args: Prisma.Ownership_TypesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Ownership_TypesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Ownership_TypesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Ownership_TypesPayload>
          }
          aggregate: {
            args: Prisma.Ownership_TypesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOwnership_Types>
          }
          groupBy: {
            args: Prisma.Ownership_TypesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Ownership_TypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Ownership_TypesCountArgs<ExtArgs>,
            result: $Utils.Optional<Ownership_TypesCountAggregateOutputType> | number
          }
        }
      }
      Size: {
        payload: Prisma.$SizePayload<ExtArgs>
        fields: Prisma.SizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SizeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SizeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findFirst: {
            args: Prisma.SizeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SizeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findMany: {
            args: Prisma.SizeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          create: {
            args: Prisma.SizeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          createMany: {
            args: Prisma.SizeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SizeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          update: {
            args: Prisma.SizeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          deleteMany: {
            args: Prisma.SizeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SizeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SizeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          aggregate: {
            args: Prisma.SizeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSize>
          }
          groupBy: {
            args: Prisma.SizeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SizeCountArgs<ExtArgs>,
            result: $Utils.Optional<SizeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Legal_FormsCountOutputType
   */

  export type Legal_FormsCountOutputType = {
    DocMain: number
  }

  export type Legal_FormsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DocMain?: boolean | Legal_FormsCountOutputTypeCountDocMainArgs
  }

  // Custom InputTypes

  /**
   * Legal_FormsCountOutputType without action
   */
  export type Legal_FormsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_FormsCountOutputType
     */
    select?: Legal_FormsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Legal_FormsCountOutputType without action
   */
  export type Legal_FormsCountOutputTypeCountDocMainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocMainWhereInput
  }



  /**
   * Count Type Ownership_TypesCountOutputType
   */

  export type Ownership_TypesCountOutputType = {
    DocMain: number
  }

  export type Ownership_TypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DocMain?: boolean | Ownership_TypesCountOutputTypeCountDocMainArgs
  }

  // Custom InputTypes

  /**
   * Ownership_TypesCountOutputType without action
   */
  export type Ownership_TypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_TypesCountOutputType
     */
    select?: Ownership_TypesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Ownership_TypesCountOutputType without action
   */
  export type Ownership_TypesCountOutputTypeCountDocMainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocMainWhereInput
  }



  /**
   * Count Type SizeCountOutputType
   */

  export type SizeCountOutputType = {
    DocMain: number
  }

  export type SizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DocMain?: boolean | SizeCountOutputTypeCountDocMainArgs
  }

  // Custom InputTypes

  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SizeCountOutputType
     */
    select?: SizeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountDocMainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocMainWhereInput
  }



  /**
   * Models
   */

  /**
   * Model DocMain
   */

  export type AggregateDocMain = {
    _count: DocMainCountAggregateOutputType | null
    _avg: DocMainAvgAggregateOutputType | null
    _sum: DocMainSumAggregateOutputType | null
    _min: DocMainMinAggregateOutputType | null
    _max: DocMainMaxAggregateOutputType | null
  }

  export type DocMainAvgAggregateOutputType = {
    Stat_ID: number | null
    Legal_Code: number | null
    Legal_Form_ID: number | null
    Ownership_Type_ID: number | null
    ISActive: number | null
    Zoma_ID: number | null
    Change: number | null
  }

  export type DocMainSumAggregateOutputType = {
    Stat_ID: number | null
    Legal_Code: number | null
    Legal_Form_ID: number | null
    Ownership_Type_ID: number | null
    ISActive: number | null
    Zoma_ID: number | null
    Change: number | null
  }

  export type DocMainMinAggregateOutputType = {
    Stat_ID: number | null
    Legal_Code: number | null
    Personal_no: string | null
    Legal_Form_ID: number | null
    Full_Name: string | null
    Ownership_Type_ID: number | null
    ISActive: number | null
    Zoma_ID: number | null
    Reg_Date: Date | null
    Init_Reg_date: Date | null
    Change: number | null
  }

  export type DocMainMaxAggregateOutputType = {
    Stat_ID: number | null
    Legal_Code: number | null
    Personal_no: string | null
    Legal_Form_ID: number | null
    Full_Name: string | null
    Ownership_Type_ID: number | null
    ISActive: number | null
    Zoma_ID: number | null
    Reg_Date: Date | null
    Init_Reg_date: Date | null
    Change: number | null
  }

  export type DocMainCountAggregateOutputType = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: number
    Legal_Form_ID: number
    Full_Name: number
    Ownership_Type_ID: number
    ISActive: number
    Zoma_ID: number
    Reg_Date: number
    Init_Reg_date: number
    Change: number
    _all: number
  }


  export type DocMainAvgAggregateInputType = {
    Stat_ID?: true
    Legal_Code?: true
    Legal_Form_ID?: true
    Ownership_Type_ID?: true
    ISActive?: true
    Zoma_ID?: true
    Change?: true
  }

  export type DocMainSumAggregateInputType = {
    Stat_ID?: true
    Legal_Code?: true
    Legal_Form_ID?: true
    Ownership_Type_ID?: true
    ISActive?: true
    Zoma_ID?: true
    Change?: true
  }

  export type DocMainMinAggregateInputType = {
    Stat_ID?: true
    Legal_Code?: true
    Personal_no?: true
    Legal_Form_ID?: true
    Full_Name?: true
    Ownership_Type_ID?: true
    ISActive?: true
    Zoma_ID?: true
    Reg_Date?: true
    Init_Reg_date?: true
    Change?: true
  }

  export type DocMainMaxAggregateInputType = {
    Stat_ID?: true
    Legal_Code?: true
    Personal_no?: true
    Legal_Form_ID?: true
    Full_Name?: true
    Ownership_Type_ID?: true
    ISActive?: true
    Zoma_ID?: true
    Reg_Date?: true
    Init_Reg_date?: true
    Change?: true
  }

  export type DocMainCountAggregateInputType = {
    Stat_ID?: true
    Legal_Code?: true
    Personal_no?: true
    Legal_Form_ID?: true
    Full_Name?: true
    Ownership_Type_ID?: true
    ISActive?: true
    Zoma_ID?: true
    Reg_Date?: true
    Init_Reg_date?: true
    Change?: true
    _all?: true
  }

  export type DocMainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocMain to aggregate.
     */
    where?: DocMainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocMains to fetch.
     */
    orderBy?: DocMainOrderByWithRelationInput | DocMainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocMainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocMains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocMains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocMains
    **/
    _count?: true | DocMainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocMainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocMainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocMainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocMainMaxAggregateInputType
  }

  export type GetDocMainAggregateType<T extends DocMainAggregateArgs> = {
        [P in keyof T & keyof AggregateDocMain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocMain[P]>
      : GetScalarType<T[P], AggregateDocMain[P]>
  }




  export type DocMainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocMainWhereInput
    orderBy?: DocMainOrderByWithAggregationInput | DocMainOrderByWithAggregationInput[]
    by: DocMainScalarFieldEnum[] | DocMainScalarFieldEnum
    having?: DocMainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocMainCountAggregateInputType | true
    _avg?: DocMainAvgAggregateInputType
    _sum?: DocMainSumAggregateInputType
    _min?: DocMainMinAggregateInputType
    _max?: DocMainMaxAggregateInputType
  }

  export type DocMainGroupByOutputType = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Legal_Form_ID: number
    Full_Name: string
    Ownership_Type_ID: number
    ISActive: number | null
    Zoma_ID: number
    Reg_Date: Date
    Init_Reg_date: Date
    Change: number | null
    _count: DocMainCountAggregateOutputType | null
    _avg: DocMainAvgAggregateOutputType | null
    _sum: DocMainSumAggregateOutputType | null
    _min: DocMainMinAggregateOutputType | null
    _max: DocMainMaxAggregateOutputType | null
  }

  type GetDocMainGroupByPayload<T extends DocMainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocMainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocMainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocMainGroupByOutputType[P]>
            : GetScalarType<T[P], DocMainGroupByOutputType[P]>
        }
      >
    >


  export type DocMainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Stat_ID?: boolean
    Legal_Code?: boolean
    Personal_no?: boolean
    Legal_Form_ID?: boolean
    Full_Name?: boolean
    Ownership_Type_ID?: boolean
    ISActive?: boolean
    Zoma_ID?: boolean
    Reg_Date?: boolean
    Init_Reg_date?: boolean
    Change?: boolean
    Legal_Forms?: boolean | Legal_FormsDefaultArgs<ExtArgs>
    Ownership_Types?: boolean | Ownership_TypesDefaultArgs<ExtArgs>
    Zoma?: boolean | SizeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docMain"]>

  export type DocMainSelectScalar = {
    Stat_ID?: boolean
    Legal_Code?: boolean
    Personal_no?: boolean
    Legal_Form_ID?: boolean
    Full_Name?: boolean
    Ownership_Type_ID?: boolean
    ISActive?: boolean
    Zoma_ID?: boolean
    Reg_Date?: boolean
    Init_Reg_date?: boolean
    Change?: boolean
  }

  export type DocMainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Legal_Forms?: boolean | Legal_FormsDefaultArgs<ExtArgs>
    Ownership_Types?: boolean | Ownership_TypesDefaultArgs<ExtArgs>
    Zoma?: boolean | SizeDefaultArgs<ExtArgs>
  }


  export type $DocMainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocMain"
    objects: {
      Legal_Forms: Prisma.$Legal_FormsPayload<ExtArgs>
      Ownership_Types: Prisma.$Ownership_TypesPayload<ExtArgs>
      Zoma: Prisma.$SizePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Stat_ID: number
      Legal_Code: number
      Personal_no: string
      Legal_Form_ID: number
      Full_Name: string
      Ownership_Type_ID: number
      ISActive: number | null
      Zoma_ID: number
      Reg_Date: Date
      Init_Reg_date: Date
      Change: number | null
    }, ExtArgs["result"]["docMain"]>
    composites: {}
  }


  type DocMainGetPayload<S extends boolean | null | undefined | DocMainDefaultArgs> = $Result.GetResult<Prisma.$DocMainPayload, S>

  type DocMainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DocMainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocMainCountAggregateInputType | true
    }

  export interface DocMainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocMain'], meta: { name: 'DocMain' } }
    /**
     * Find zero or one DocMain that matches the filter.
     * @param {DocMainFindUniqueArgs} args - Arguments to find a DocMain
     * @example
     * // Get one DocMain
     * const docMain = await prisma.docMain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DocMainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DocMainFindUniqueArgs<ExtArgs>>
    ): Prisma__DocMainClient<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DocMain that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DocMainFindUniqueOrThrowArgs} args - Arguments to find a DocMain
     * @example
     * // Get one DocMain
     * const docMain = await prisma.docMain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DocMainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DocMainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DocMainClient<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DocMain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocMainFindFirstArgs} args - Arguments to find a DocMain
     * @example
     * // Get one DocMain
     * const docMain = await prisma.docMain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DocMainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DocMainFindFirstArgs<ExtArgs>>
    ): Prisma__DocMainClient<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DocMain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocMainFindFirstOrThrowArgs} args - Arguments to find a DocMain
     * @example
     * // Get one DocMain
     * const docMain = await prisma.docMain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DocMainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DocMainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DocMainClient<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DocMains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocMainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocMains
     * const docMains = await prisma.docMain.findMany()
     * 
     * // Get first 10 DocMains
     * const docMains = await prisma.docMain.findMany({ take: 10 })
     * 
     * // Only select the `Stat_ID`
     * const docMainWithStat_IDOnly = await prisma.docMain.findMany({ select: { Stat_ID: true } })
     * 
    **/
    findMany<T extends DocMainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DocMainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DocMain.
     * @param {DocMainCreateArgs} args - Arguments to create a DocMain.
     * @example
     * // Create one DocMain
     * const DocMain = await prisma.docMain.create({
     *   data: {
     *     // ... data to create a DocMain
     *   }
     * })
     * 
    **/
    create<T extends DocMainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DocMainCreateArgs<ExtArgs>>
    ): Prisma__DocMainClient<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DocMains.
     *     @param {DocMainCreateManyArgs} args - Arguments to create many DocMains.
     *     @example
     *     // Create many DocMains
     *     const docMain = await prisma.docMain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DocMainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DocMainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DocMain.
     * @param {DocMainDeleteArgs} args - Arguments to delete one DocMain.
     * @example
     * // Delete one DocMain
     * const DocMain = await prisma.docMain.delete({
     *   where: {
     *     // ... filter to delete one DocMain
     *   }
     * })
     * 
    **/
    delete<T extends DocMainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DocMainDeleteArgs<ExtArgs>>
    ): Prisma__DocMainClient<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DocMain.
     * @param {DocMainUpdateArgs} args - Arguments to update one DocMain.
     * @example
     * // Update one DocMain
     * const docMain = await prisma.docMain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DocMainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DocMainUpdateArgs<ExtArgs>>
    ): Prisma__DocMainClient<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DocMains.
     * @param {DocMainDeleteManyArgs} args - Arguments to filter DocMains to delete.
     * @example
     * // Delete a few DocMains
     * const { count } = await prisma.docMain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DocMainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DocMainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocMains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocMainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocMains
     * const docMain = await prisma.docMain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DocMainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DocMainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocMain.
     * @param {DocMainUpsertArgs} args - Arguments to update or create a DocMain.
     * @example
     * // Update or create a DocMain
     * const docMain = await prisma.docMain.upsert({
     *   create: {
     *     // ... data to create a DocMain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocMain we want to update
     *   }
     * })
    **/
    upsert<T extends DocMainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DocMainUpsertArgs<ExtArgs>>
    ): Prisma__DocMainClient<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DocMains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocMainCountArgs} args - Arguments to filter DocMains to count.
     * @example
     * // Count the number of DocMains
     * const count = await prisma.docMain.count({
     *   where: {
     *     // ... the filter for the DocMains we want to count
     *   }
     * })
    **/
    count<T extends DocMainCountArgs>(
      args?: Subset<T, DocMainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocMainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocMain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocMainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocMainAggregateArgs>(args: Subset<T, DocMainAggregateArgs>): Prisma.PrismaPromise<GetDocMainAggregateType<T>>

    /**
     * Group by DocMain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocMainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocMainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocMainGroupByArgs['orderBy'] }
        : { orderBy?: DocMainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocMainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocMainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocMain model
   */
  readonly fields: DocMainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocMain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocMainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Legal_Forms<T extends Legal_FormsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Legal_FormsDefaultArgs<ExtArgs>>): Prisma__Legal_FormsClient<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Ownership_Types<T extends Ownership_TypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Ownership_TypesDefaultArgs<ExtArgs>>): Prisma__Ownership_TypesClient<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Zoma<T extends SizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SizeDefaultArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DocMain model
   */ 
  interface DocMainFieldRefs {
    readonly Stat_ID: FieldRef<"DocMain", 'Int'>
    readonly Legal_Code: FieldRef<"DocMain", 'Int'>
    readonly Personal_no: FieldRef<"DocMain", 'String'>
    readonly Legal_Form_ID: FieldRef<"DocMain", 'Int'>
    readonly Full_Name: FieldRef<"DocMain", 'String'>
    readonly Ownership_Type_ID: FieldRef<"DocMain", 'Int'>
    readonly ISActive: FieldRef<"DocMain", 'Int'>
    readonly Zoma_ID: FieldRef<"DocMain", 'Int'>
    readonly Reg_Date: FieldRef<"DocMain", 'DateTime'>
    readonly Init_Reg_date: FieldRef<"DocMain", 'DateTime'>
    readonly Change: FieldRef<"DocMain", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DocMain findUnique
   */
  export type DocMainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    /**
     * Filter, which DocMain to fetch.
     */
    where: DocMainWhereUniqueInput
  }


  /**
   * DocMain findUniqueOrThrow
   */
  export type DocMainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    /**
     * Filter, which DocMain to fetch.
     */
    where: DocMainWhereUniqueInput
  }


  /**
   * DocMain findFirst
   */
  export type DocMainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    /**
     * Filter, which DocMain to fetch.
     */
    where?: DocMainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocMains to fetch.
     */
    orderBy?: DocMainOrderByWithRelationInput | DocMainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocMains.
     */
    cursor?: DocMainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocMains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocMains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocMains.
     */
    distinct?: DocMainScalarFieldEnum | DocMainScalarFieldEnum[]
  }


  /**
   * DocMain findFirstOrThrow
   */
  export type DocMainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    /**
     * Filter, which DocMain to fetch.
     */
    where?: DocMainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocMains to fetch.
     */
    orderBy?: DocMainOrderByWithRelationInput | DocMainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocMains.
     */
    cursor?: DocMainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocMains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocMains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocMains.
     */
    distinct?: DocMainScalarFieldEnum | DocMainScalarFieldEnum[]
  }


  /**
   * DocMain findMany
   */
  export type DocMainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    /**
     * Filter, which DocMains to fetch.
     */
    where?: DocMainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocMains to fetch.
     */
    orderBy?: DocMainOrderByWithRelationInput | DocMainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocMains.
     */
    cursor?: DocMainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocMains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocMains.
     */
    skip?: number
    distinct?: DocMainScalarFieldEnum | DocMainScalarFieldEnum[]
  }


  /**
   * DocMain create
   */
  export type DocMainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    /**
     * The data needed to create a DocMain.
     */
    data: XOR<DocMainCreateInput, DocMainUncheckedCreateInput>
  }


  /**
   * DocMain createMany
   */
  export type DocMainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocMains.
     */
    data: DocMainCreateManyInput | DocMainCreateManyInput[]
  }


  /**
   * DocMain update
   */
  export type DocMainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    /**
     * The data needed to update a DocMain.
     */
    data: XOR<DocMainUpdateInput, DocMainUncheckedUpdateInput>
    /**
     * Choose, which DocMain to update.
     */
    where: DocMainWhereUniqueInput
  }


  /**
   * DocMain updateMany
   */
  export type DocMainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocMains.
     */
    data: XOR<DocMainUpdateManyMutationInput, DocMainUncheckedUpdateManyInput>
    /**
     * Filter which DocMains to update
     */
    where?: DocMainWhereInput
  }


  /**
   * DocMain upsert
   */
  export type DocMainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    /**
     * The filter to search for the DocMain to update in case it exists.
     */
    where: DocMainWhereUniqueInput
    /**
     * In case the DocMain found by the `where` argument doesn't exist, create a new DocMain with this data.
     */
    create: XOR<DocMainCreateInput, DocMainUncheckedCreateInput>
    /**
     * In case the DocMain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocMainUpdateInput, DocMainUncheckedUpdateInput>
  }


  /**
   * DocMain delete
   */
  export type DocMainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    /**
     * Filter which DocMain to delete.
     */
    where: DocMainWhereUniqueInput
  }


  /**
   * DocMain deleteMany
   */
  export type DocMainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocMains to delete
     */
    where?: DocMainWhereInput
  }


  /**
   * DocMain without action
   */
  export type DocMainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
  }



  /**
   * Model Legal_Forms
   */

  export type AggregateLegal_Forms = {
    _count: Legal_FormsCountAggregateOutputType | null
    _avg: Legal_FormsAvgAggregateOutputType | null
    _sum: Legal_FormsSumAggregateOutputType | null
    _min: Legal_FormsMinAggregateOutputType | null
    _max: Legal_FormsMaxAggregateOutputType | null
  }

  export type Legal_FormsAvgAggregateOutputType = {
    ID: number | null
  }

  export type Legal_FormsSumAggregateOutputType = {
    ID: number | null
  }

  export type Legal_FormsMinAggregateOutputType = {
    ID: number | null
    Abbreviation_ka: string | null
    Abbreviation_en: string | null
    Legal_Form_ka: string | null
    Legal_Form_en: string | null
  }

  export type Legal_FormsMaxAggregateOutputType = {
    ID: number | null
    Abbreviation_ka: string | null
    Abbreviation_en: string | null
    Legal_Form_ka: string | null
    Legal_Form_en: string | null
  }

  export type Legal_FormsCountAggregateOutputType = {
    ID: number
    Abbreviation_ka: number
    Abbreviation_en: number
    Legal_Form_ka: number
    Legal_Form_en: number
    _all: number
  }


  export type Legal_FormsAvgAggregateInputType = {
    ID?: true
  }

  export type Legal_FormsSumAggregateInputType = {
    ID?: true
  }

  export type Legal_FormsMinAggregateInputType = {
    ID?: true
    Abbreviation_ka?: true
    Abbreviation_en?: true
    Legal_Form_ka?: true
    Legal_Form_en?: true
  }

  export type Legal_FormsMaxAggregateInputType = {
    ID?: true
    Abbreviation_ka?: true
    Abbreviation_en?: true
    Legal_Form_ka?: true
    Legal_Form_en?: true
  }

  export type Legal_FormsCountAggregateInputType = {
    ID?: true
    Abbreviation_ka?: true
    Abbreviation_en?: true
    Legal_Form_ka?: true
    Legal_Form_en?: true
    _all?: true
  }

  export type Legal_FormsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legal_Forms to aggregate.
     */
    where?: Legal_FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legal_Forms to fetch.
     */
    orderBy?: Legal_FormsOrderByWithRelationInput | Legal_FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Legal_FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legal_Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legal_Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Legal_Forms
    **/
    _count?: true | Legal_FormsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Legal_FormsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Legal_FormsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Legal_FormsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Legal_FormsMaxAggregateInputType
  }

  export type GetLegal_FormsAggregateType<T extends Legal_FormsAggregateArgs> = {
        [P in keyof T & keyof AggregateLegal_Forms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegal_Forms[P]>
      : GetScalarType<T[P], AggregateLegal_Forms[P]>
  }




  export type Legal_FormsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Legal_FormsWhereInput
    orderBy?: Legal_FormsOrderByWithAggregationInput | Legal_FormsOrderByWithAggregationInput[]
    by: Legal_FormsScalarFieldEnum[] | Legal_FormsScalarFieldEnum
    having?: Legal_FormsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Legal_FormsCountAggregateInputType | true
    _avg?: Legal_FormsAvgAggregateInputType
    _sum?: Legal_FormsSumAggregateInputType
    _min?: Legal_FormsMinAggregateInputType
    _max?: Legal_FormsMaxAggregateInputType
  }

  export type Legal_FormsGroupByOutputType = {
    ID: number
    Abbreviation_ka: string
    Abbreviation_en: string
    Legal_Form_ka: string
    Legal_Form_en: string
    _count: Legal_FormsCountAggregateOutputType | null
    _avg: Legal_FormsAvgAggregateOutputType | null
    _sum: Legal_FormsSumAggregateOutputType | null
    _min: Legal_FormsMinAggregateOutputType | null
    _max: Legal_FormsMaxAggregateOutputType | null
  }

  type GetLegal_FormsGroupByPayload<T extends Legal_FormsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Legal_FormsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Legal_FormsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Legal_FormsGroupByOutputType[P]>
            : GetScalarType<T[P], Legal_FormsGroupByOutputType[P]>
        }
      >
    >


  export type Legal_FormsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Abbreviation_ka?: boolean
    Abbreviation_en?: boolean
    Legal_Form_ka?: boolean
    Legal_Form_en?: boolean
    DocMain?: boolean | Legal_Forms$DocMainArgs<ExtArgs>
    _count?: boolean | Legal_FormsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legal_Forms"]>

  export type Legal_FormsSelectScalar = {
    ID?: boolean
    Abbreviation_ka?: boolean
    Abbreviation_en?: boolean
    Legal_Form_ka?: boolean
    Legal_Form_en?: boolean
  }

  export type Legal_FormsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DocMain?: boolean | Legal_Forms$DocMainArgs<ExtArgs>
    _count?: boolean | Legal_FormsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Legal_FormsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Legal_Forms"
    objects: {
      DocMain: Prisma.$DocMainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Abbreviation_ka: string
      Abbreviation_en: string
      Legal_Form_ka: string
      Legal_Form_en: string
    }, ExtArgs["result"]["legal_Forms"]>
    composites: {}
  }


  type Legal_FormsGetPayload<S extends boolean | null | undefined | Legal_FormsDefaultArgs> = $Result.GetResult<Prisma.$Legal_FormsPayload, S>

  type Legal_FormsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Legal_FormsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Legal_FormsCountAggregateInputType | true
    }

  export interface Legal_FormsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Legal_Forms'], meta: { name: 'Legal_Forms' } }
    /**
     * Find zero or one Legal_Forms that matches the filter.
     * @param {Legal_FormsFindUniqueArgs} args - Arguments to find a Legal_Forms
     * @example
     * // Get one Legal_Forms
     * const legal_Forms = await prisma.legal_Forms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Legal_FormsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Legal_FormsFindUniqueArgs<ExtArgs>>
    ): Prisma__Legal_FormsClient<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Legal_Forms that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Legal_FormsFindUniqueOrThrowArgs} args - Arguments to find a Legal_Forms
     * @example
     * // Get one Legal_Forms
     * const legal_Forms = await prisma.legal_Forms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Legal_FormsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Legal_FormsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Legal_FormsClient<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Legal_Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Legal_FormsFindFirstArgs} args - Arguments to find a Legal_Forms
     * @example
     * // Get one Legal_Forms
     * const legal_Forms = await prisma.legal_Forms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Legal_FormsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Legal_FormsFindFirstArgs<ExtArgs>>
    ): Prisma__Legal_FormsClient<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Legal_Forms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Legal_FormsFindFirstOrThrowArgs} args - Arguments to find a Legal_Forms
     * @example
     * // Get one Legal_Forms
     * const legal_Forms = await prisma.legal_Forms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Legal_FormsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Legal_FormsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Legal_FormsClient<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Legal_Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Legal_FormsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legal_Forms
     * const legal_Forms = await prisma.legal_Forms.findMany()
     * 
     * // Get first 10 Legal_Forms
     * const legal_Forms = await prisma.legal_Forms.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const legal_FormsWithIDOnly = await prisma.legal_Forms.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends Legal_FormsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Legal_FormsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Legal_Forms.
     * @param {Legal_FormsCreateArgs} args - Arguments to create a Legal_Forms.
     * @example
     * // Create one Legal_Forms
     * const Legal_Forms = await prisma.legal_Forms.create({
     *   data: {
     *     // ... data to create a Legal_Forms
     *   }
     * })
     * 
    **/
    create<T extends Legal_FormsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Legal_FormsCreateArgs<ExtArgs>>
    ): Prisma__Legal_FormsClient<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Legal_Forms.
     *     @param {Legal_FormsCreateManyArgs} args - Arguments to create many Legal_Forms.
     *     @example
     *     // Create many Legal_Forms
     *     const legal_Forms = await prisma.legal_Forms.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Legal_FormsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Legal_FormsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Legal_Forms.
     * @param {Legal_FormsDeleteArgs} args - Arguments to delete one Legal_Forms.
     * @example
     * // Delete one Legal_Forms
     * const Legal_Forms = await prisma.legal_Forms.delete({
     *   where: {
     *     // ... filter to delete one Legal_Forms
     *   }
     * })
     * 
    **/
    delete<T extends Legal_FormsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Legal_FormsDeleteArgs<ExtArgs>>
    ): Prisma__Legal_FormsClient<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Legal_Forms.
     * @param {Legal_FormsUpdateArgs} args - Arguments to update one Legal_Forms.
     * @example
     * // Update one Legal_Forms
     * const legal_Forms = await prisma.legal_Forms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Legal_FormsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Legal_FormsUpdateArgs<ExtArgs>>
    ): Prisma__Legal_FormsClient<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Legal_Forms.
     * @param {Legal_FormsDeleteManyArgs} args - Arguments to filter Legal_Forms to delete.
     * @example
     * // Delete a few Legal_Forms
     * const { count } = await prisma.legal_Forms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Legal_FormsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Legal_FormsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legal_Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Legal_FormsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legal_Forms
     * const legal_Forms = await prisma.legal_Forms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Legal_FormsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Legal_FormsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Legal_Forms.
     * @param {Legal_FormsUpsertArgs} args - Arguments to update or create a Legal_Forms.
     * @example
     * // Update or create a Legal_Forms
     * const legal_Forms = await prisma.legal_Forms.upsert({
     *   create: {
     *     // ... data to create a Legal_Forms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Legal_Forms we want to update
     *   }
     * })
    **/
    upsert<T extends Legal_FormsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Legal_FormsUpsertArgs<ExtArgs>>
    ): Prisma__Legal_FormsClient<$Result.GetResult<Prisma.$Legal_FormsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Legal_Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Legal_FormsCountArgs} args - Arguments to filter Legal_Forms to count.
     * @example
     * // Count the number of Legal_Forms
     * const count = await prisma.legal_Forms.count({
     *   where: {
     *     // ... the filter for the Legal_Forms we want to count
     *   }
     * })
    **/
    count<T extends Legal_FormsCountArgs>(
      args?: Subset<T, Legal_FormsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Legal_FormsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Legal_Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Legal_FormsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Legal_FormsAggregateArgs>(args: Subset<T, Legal_FormsAggregateArgs>): Prisma.PrismaPromise<GetLegal_FormsAggregateType<T>>

    /**
     * Group by Legal_Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Legal_FormsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Legal_FormsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Legal_FormsGroupByArgs['orderBy'] }
        : { orderBy?: Legal_FormsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Legal_FormsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegal_FormsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Legal_Forms model
   */
  readonly fields: Legal_FormsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Legal_Forms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Legal_FormsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DocMain<T extends Legal_Forms$DocMainArgs<ExtArgs> = {}>(args?: Subset<T, Legal_Forms$DocMainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Legal_Forms model
   */ 
  interface Legal_FormsFieldRefs {
    readonly ID: FieldRef<"Legal_Forms", 'Int'>
    readonly Abbreviation_ka: FieldRef<"Legal_Forms", 'String'>
    readonly Abbreviation_en: FieldRef<"Legal_Forms", 'String'>
    readonly Legal_Form_ka: FieldRef<"Legal_Forms", 'String'>
    readonly Legal_Form_en: FieldRef<"Legal_Forms", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Legal_Forms findUnique
   */
  export type Legal_FormsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
    /**
     * Filter, which Legal_Forms to fetch.
     */
    where: Legal_FormsWhereUniqueInput
  }


  /**
   * Legal_Forms findUniqueOrThrow
   */
  export type Legal_FormsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
    /**
     * Filter, which Legal_Forms to fetch.
     */
    where: Legal_FormsWhereUniqueInput
  }


  /**
   * Legal_Forms findFirst
   */
  export type Legal_FormsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
    /**
     * Filter, which Legal_Forms to fetch.
     */
    where?: Legal_FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legal_Forms to fetch.
     */
    orderBy?: Legal_FormsOrderByWithRelationInput | Legal_FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legal_Forms.
     */
    cursor?: Legal_FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legal_Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legal_Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legal_Forms.
     */
    distinct?: Legal_FormsScalarFieldEnum | Legal_FormsScalarFieldEnum[]
  }


  /**
   * Legal_Forms findFirstOrThrow
   */
  export type Legal_FormsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
    /**
     * Filter, which Legal_Forms to fetch.
     */
    where?: Legal_FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legal_Forms to fetch.
     */
    orderBy?: Legal_FormsOrderByWithRelationInput | Legal_FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legal_Forms.
     */
    cursor?: Legal_FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legal_Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legal_Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legal_Forms.
     */
    distinct?: Legal_FormsScalarFieldEnum | Legal_FormsScalarFieldEnum[]
  }


  /**
   * Legal_Forms findMany
   */
  export type Legal_FormsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
    /**
     * Filter, which Legal_Forms to fetch.
     */
    where?: Legal_FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legal_Forms to fetch.
     */
    orderBy?: Legal_FormsOrderByWithRelationInput | Legal_FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Legal_Forms.
     */
    cursor?: Legal_FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legal_Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legal_Forms.
     */
    skip?: number
    distinct?: Legal_FormsScalarFieldEnum | Legal_FormsScalarFieldEnum[]
  }


  /**
   * Legal_Forms create
   */
  export type Legal_FormsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
    /**
     * The data needed to create a Legal_Forms.
     */
    data: XOR<Legal_FormsCreateInput, Legal_FormsUncheckedCreateInput>
  }


  /**
   * Legal_Forms createMany
   */
  export type Legal_FormsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Legal_Forms.
     */
    data: Legal_FormsCreateManyInput | Legal_FormsCreateManyInput[]
  }


  /**
   * Legal_Forms update
   */
  export type Legal_FormsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
    /**
     * The data needed to update a Legal_Forms.
     */
    data: XOR<Legal_FormsUpdateInput, Legal_FormsUncheckedUpdateInput>
    /**
     * Choose, which Legal_Forms to update.
     */
    where: Legal_FormsWhereUniqueInput
  }


  /**
   * Legal_Forms updateMany
   */
  export type Legal_FormsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Legal_Forms.
     */
    data: XOR<Legal_FormsUpdateManyMutationInput, Legal_FormsUncheckedUpdateManyInput>
    /**
     * Filter which Legal_Forms to update
     */
    where?: Legal_FormsWhereInput
  }


  /**
   * Legal_Forms upsert
   */
  export type Legal_FormsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
    /**
     * The filter to search for the Legal_Forms to update in case it exists.
     */
    where: Legal_FormsWhereUniqueInput
    /**
     * In case the Legal_Forms found by the `where` argument doesn't exist, create a new Legal_Forms with this data.
     */
    create: XOR<Legal_FormsCreateInput, Legal_FormsUncheckedCreateInput>
    /**
     * In case the Legal_Forms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Legal_FormsUpdateInput, Legal_FormsUncheckedUpdateInput>
  }


  /**
   * Legal_Forms delete
   */
  export type Legal_FormsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
    /**
     * Filter which Legal_Forms to delete.
     */
    where: Legal_FormsWhereUniqueInput
  }


  /**
   * Legal_Forms deleteMany
   */
  export type Legal_FormsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legal_Forms to delete
     */
    where?: Legal_FormsWhereInput
  }


  /**
   * Legal_Forms.DocMain
   */
  export type Legal_Forms$DocMainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    where?: DocMainWhereInput
    orderBy?: DocMainOrderByWithRelationInput | DocMainOrderByWithRelationInput[]
    cursor?: DocMainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocMainScalarFieldEnum | DocMainScalarFieldEnum[]
  }


  /**
   * Legal_Forms without action
   */
  export type Legal_FormsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Legal_Forms
     */
    select?: Legal_FormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Legal_FormsInclude<ExtArgs> | null
  }



  /**
   * Model Ownership_Types
   */

  export type AggregateOwnership_Types = {
    _count: Ownership_TypesCountAggregateOutputType | null
    _avg: Ownership_TypesAvgAggregateOutputType | null
    _sum: Ownership_TypesSumAggregateOutputType | null
    _min: Ownership_TypesMinAggregateOutputType | null
    _max: Ownership_TypesMaxAggregateOutputType | null
  }

  export type Ownership_TypesAvgAggregateOutputType = {
    ID: number | null
  }

  export type Ownership_TypesSumAggregateOutputType = {
    ID: number | null
  }

  export type Ownership_TypesMinAggregateOutputType = {
    ID: number | null
    Ownership_Type_ka: string | null
    Ownership_Type_en: string | null
  }

  export type Ownership_TypesMaxAggregateOutputType = {
    ID: number | null
    Ownership_Type_ka: string | null
    Ownership_Type_en: string | null
  }

  export type Ownership_TypesCountAggregateOutputType = {
    ID: number
    Ownership_Type_ka: number
    Ownership_Type_en: number
    _all: number
  }


  export type Ownership_TypesAvgAggregateInputType = {
    ID?: true
  }

  export type Ownership_TypesSumAggregateInputType = {
    ID?: true
  }

  export type Ownership_TypesMinAggregateInputType = {
    ID?: true
    Ownership_Type_ka?: true
    Ownership_Type_en?: true
  }

  export type Ownership_TypesMaxAggregateInputType = {
    ID?: true
    Ownership_Type_ka?: true
    Ownership_Type_en?: true
  }

  export type Ownership_TypesCountAggregateInputType = {
    ID?: true
    Ownership_Type_ka?: true
    Ownership_Type_en?: true
    _all?: true
  }

  export type Ownership_TypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ownership_Types to aggregate.
     */
    where?: Ownership_TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ownership_Types to fetch.
     */
    orderBy?: Ownership_TypesOrderByWithRelationInput | Ownership_TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Ownership_TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ownership_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ownership_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ownership_Types
    **/
    _count?: true | Ownership_TypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ownership_TypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ownership_TypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ownership_TypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ownership_TypesMaxAggregateInputType
  }

  export type GetOwnership_TypesAggregateType<T extends Ownership_TypesAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnership_Types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnership_Types[P]>
      : GetScalarType<T[P], AggregateOwnership_Types[P]>
  }




  export type Ownership_TypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ownership_TypesWhereInput
    orderBy?: Ownership_TypesOrderByWithAggregationInput | Ownership_TypesOrderByWithAggregationInput[]
    by: Ownership_TypesScalarFieldEnum[] | Ownership_TypesScalarFieldEnum
    having?: Ownership_TypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ownership_TypesCountAggregateInputType | true
    _avg?: Ownership_TypesAvgAggregateInputType
    _sum?: Ownership_TypesSumAggregateInputType
    _min?: Ownership_TypesMinAggregateInputType
    _max?: Ownership_TypesMaxAggregateInputType
  }

  export type Ownership_TypesGroupByOutputType = {
    ID: number
    Ownership_Type_ka: string
    Ownership_Type_en: string
    _count: Ownership_TypesCountAggregateOutputType | null
    _avg: Ownership_TypesAvgAggregateOutputType | null
    _sum: Ownership_TypesSumAggregateOutputType | null
    _min: Ownership_TypesMinAggregateOutputType | null
    _max: Ownership_TypesMaxAggregateOutputType | null
  }

  type GetOwnership_TypesGroupByPayload<T extends Ownership_TypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ownership_TypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ownership_TypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ownership_TypesGroupByOutputType[P]>
            : GetScalarType<T[P], Ownership_TypesGroupByOutputType[P]>
        }
      >
    >


  export type Ownership_TypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Ownership_Type_ka?: boolean
    Ownership_Type_en?: boolean
    DocMain?: boolean | Ownership_Types$DocMainArgs<ExtArgs>
    _count?: boolean | Ownership_TypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownership_Types"]>

  export type Ownership_TypesSelectScalar = {
    ID?: boolean
    Ownership_Type_ka?: boolean
    Ownership_Type_en?: boolean
  }

  export type Ownership_TypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DocMain?: boolean | Ownership_Types$DocMainArgs<ExtArgs>
    _count?: boolean | Ownership_TypesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Ownership_TypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ownership_Types"
    objects: {
      DocMain: Prisma.$DocMainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Ownership_Type_ka: string
      Ownership_Type_en: string
    }, ExtArgs["result"]["ownership_Types"]>
    composites: {}
  }


  type Ownership_TypesGetPayload<S extends boolean | null | undefined | Ownership_TypesDefaultArgs> = $Result.GetResult<Prisma.$Ownership_TypesPayload, S>

  type Ownership_TypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Ownership_TypesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ownership_TypesCountAggregateInputType | true
    }

  export interface Ownership_TypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ownership_Types'], meta: { name: 'Ownership_Types' } }
    /**
     * Find zero or one Ownership_Types that matches the filter.
     * @param {Ownership_TypesFindUniqueArgs} args - Arguments to find a Ownership_Types
     * @example
     * // Get one Ownership_Types
     * const ownership_Types = await prisma.ownership_Types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Ownership_TypesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Ownership_TypesFindUniqueArgs<ExtArgs>>
    ): Prisma__Ownership_TypesClient<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ownership_Types that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Ownership_TypesFindUniqueOrThrowArgs} args - Arguments to find a Ownership_Types
     * @example
     * // Get one Ownership_Types
     * const ownership_Types = await prisma.ownership_Types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Ownership_TypesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Ownership_TypesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Ownership_TypesClient<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ownership_Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ownership_TypesFindFirstArgs} args - Arguments to find a Ownership_Types
     * @example
     * // Get one Ownership_Types
     * const ownership_Types = await prisma.ownership_Types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Ownership_TypesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Ownership_TypesFindFirstArgs<ExtArgs>>
    ): Prisma__Ownership_TypesClient<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ownership_Types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ownership_TypesFindFirstOrThrowArgs} args - Arguments to find a Ownership_Types
     * @example
     * // Get one Ownership_Types
     * const ownership_Types = await prisma.ownership_Types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Ownership_TypesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Ownership_TypesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Ownership_TypesClient<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ownership_Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ownership_TypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ownership_Types
     * const ownership_Types = await prisma.ownership_Types.findMany()
     * 
     * // Get first 10 Ownership_Types
     * const ownership_Types = await prisma.ownership_Types.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const ownership_TypesWithIDOnly = await prisma.ownership_Types.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends Ownership_TypesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Ownership_TypesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ownership_Types.
     * @param {Ownership_TypesCreateArgs} args - Arguments to create a Ownership_Types.
     * @example
     * // Create one Ownership_Types
     * const Ownership_Types = await prisma.ownership_Types.create({
     *   data: {
     *     // ... data to create a Ownership_Types
     *   }
     * })
     * 
    **/
    create<T extends Ownership_TypesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Ownership_TypesCreateArgs<ExtArgs>>
    ): Prisma__Ownership_TypesClient<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ownership_Types.
     *     @param {Ownership_TypesCreateManyArgs} args - Arguments to create many Ownership_Types.
     *     @example
     *     // Create many Ownership_Types
     *     const ownership_Types = await prisma.ownership_Types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Ownership_TypesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Ownership_TypesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ownership_Types.
     * @param {Ownership_TypesDeleteArgs} args - Arguments to delete one Ownership_Types.
     * @example
     * // Delete one Ownership_Types
     * const Ownership_Types = await prisma.ownership_Types.delete({
     *   where: {
     *     // ... filter to delete one Ownership_Types
     *   }
     * })
     * 
    **/
    delete<T extends Ownership_TypesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Ownership_TypesDeleteArgs<ExtArgs>>
    ): Prisma__Ownership_TypesClient<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ownership_Types.
     * @param {Ownership_TypesUpdateArgs} args - Arguments to update one Ownership_Types.
     * @example
     * // Update one Ownership_Types
     * const ownership_Types = await prisma.ownership_Types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Ownership_TypesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Ownership_TypesUpdateArgs<ExtArgs>>
    ): Prisma__Ownership_TypesClient<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ownership_Types.
     * @param {Ownership_TypesDeleteManyArgs} args - Arguments to filter Ownership_Types to delete.
     * @example
     * // Delete a few Ownership_Types
     * const { count } = await prisma.ownership_Types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Ownership_TypesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Ownership_TypesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ownership_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ownership_TypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ownership_Types
     * const ownership_Types = await prisma.ownership_Types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Ownership_TypesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Ownership_TypesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ownership_Types.
     * @param {Ownership_TypesUpsertArgs} args - Arguments to update or create a Ownership_Types.
     * @example
     * // Update or create a Ownership_Types
     * const ownership_Types = await prisma.ownership_Types.upsert({
     *   create: {
     *     // ... data to create a Ownership_Types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ownership_Types we want to update
     *   }
     * })
    **/
    upsert<T extends Ownership_TypesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Ownership_TypesUpsertArgs<ExtArgs>>
    ): Prisma__Ownership_TypesClient<$Result.GetResult<Prisma.$Ownership_TypesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ownership_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ownership_TypesCountArgs} args - Arguments to filter Ownership_Types to count.
     * @example
     * // Count the number of Ownership_Types
     * const count = await prisma.ownership_Types.count({
     *   where: {
     *     // ... the filter for the Ownership_Types we want to count
     *   }
     * })
    **/
    count<T extends Ownership_TypesCountArgs>(
      args?: Subset<T, Ownership_TypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ownership_TypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ownership_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ownership_TypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ownership_TypesAggregateArgs>(args: Subset<T, Ownership_TypesAggregateArgs>): Prisma.PrismaPromise<GetOwnership_TypesAggregateType<T>>

    /**
     * Group by Ownership_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ownership_TypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Ownership_TypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ownership_TypesGroupByArgs['orderBy'] }
        : { orderBy?: Ownership_TypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Ownership_TypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnership_TypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ownership_Types model
   */
  readonly fields: Ownership_TypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ownership_Types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Ownership_TypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DocMain<T extends Ownership_Types$DocMainArgs<ExtArgs> = {}>(args?: Subset<T, Ownership_Types$DocMainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ownership_Types model
   */ 
  interface Ownership_TypesFieldRefs {
    readonly ID: FieldRef<"Ownership_Types", 'Int'>
    readonly Ownership_Type_ka: FieldRef<"Ownership_Types", 'String'>
    readonly Ownership_Type_en: FieldRef<"Ownership_Types", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Ownership_Types findUnique
   */
  export type Ownership_TypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
    /**
     * Filter, which Ownership_Types to fetch.
     */
    where: Ownership_TypesWhereUniqueInput
  }


  /**
   * Ownership_Types findUniqueOrThrow
   */
  export type Ownership_TypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
    /**
     * Filter, which Ownership_Types to fetch.
     */
    where: Ownership_TypesWhereUniqueInput
  }


  /**
   * Ownership_Types findFirst
   */
  export type Ownership_TypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
    /**
     * Filter, which Ownership_Types to fetch.
     */
    where?: Ownership_TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ownership_Types to fetch.
     */
    orderBy?: Ownership_TypesOrderByWithRelationInput | Ownership_TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ownership_Types.
     */
    cursor?: Ownership_TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ownership_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ownership_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ownership_Types.
     */
    distinct?: Ownership_TypesScalarFieldEnum | Ownership_TypesScalarFieldEnum[]
  }


  /**
   * Ownership_Types findFirstOrThrow
   */
  export type Ownership_TypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
    /**
     * Filter, which Ownership_Types to fetch.
     */
    where?: Ownership_TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ownership_Types to fetch.
     */
    orderBy?: Ownership_TypesOrderByWithRelationInput | Ownership_TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ownership_Types.
     */
    cursor?: Ownership_TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ownership_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ownership_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ownership_Types.
     */
    distinct?: Ownership_TypesScalarFieldEnum | Ownership_TypesScalarFieldEnum[]
  }


  /**
   * Ownership_Types findMany
   */
  export type Ownership_TypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
    /**
     * Filter, which Ownership_Types to fetch.
     */
    where?: Ownership_TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ownership_Types to fetch.
     */
    orderBy?: Ownership_TypesOrderByWithRelationInput | Ownership_TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ownership_Types.
     */
    cursor?: Ownership_TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ownership_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ownership_Types.
     */
    skip?: number
    distinct?: Ownership_TypesScalarFieldEnum | Ownership_TypesScalarFieldEnum[]
  }


  /**
   * Ownership_Types create
   */
  export type Ownership_TypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
    /**
     * The data needed to create a Ownership_Types.
     */
    data: XOR<Ownership_TypesCreateInput, Ownership_TypesUncheckedCreateInput>
  }


  /**
   * Ownership_Types createMany
   */
  export type Ownership_TypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ownership_Types.
     */
    data: Ownership_TypesCreateManyInput | Ownership_TypesCreateManyInput[]
  }


  /**
   * Ownership_Types update
   */
  export type Ownership_TypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
    /**
     * The data needed to update a Ownership_Types.
     */
    data: XOR<Ownership_TypesUpdateInput, Ownership_TypesUncheckedUpdateInput>
    /**
     * Choose, which Ownership_Types to update.
     */
    where: Ownership_TypesWhereUniqueInput
  }


  /**
   * Ownership_Types updateMany
   */
  export type Ownership_TypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ownership_Types.
     */
    data: XOR<Ownership_TypesUpdateManyMutationInput, Ownership_TypesUncheckedUpdateManyInput>
    /**
     * Filter which Ownership_Types to update
     */
    where?: Ownership_TypesWhereInput
  }


  /**
   * Ownership_Types upsert
   */
  export type Ownership_TypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
    /**
     * The filter to search for the Ownership_Types to update in case it exists.
     */
    where: Ownership_TypesWhereUniqueInput
    /**
     * In case the Ownership_Types found by the `where` argument doesn't exist, create a new Ownership_Types with this data.
     */
    create: XOR<Ownership_TypesCreateInput, Ownership_TypesUncheckedCreateInput>
    /**
     * In case the Ownership_Types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Ownership_TypesUpdateInput, Ownership_TypesUncheckedUpdateInput>
  }


  /**
   * Ownership_Types delete
   */
  export type Ownership_TypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
    /**
     * Filter which Ownership_Types to delete.
     */
    where: Ownership_TypesWhereUniqueInput
  }


  /**
   * Ownership_Types deleteMany
   */
  export type Ownership_TypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ownership_Types to delete
     */
    where?: Ownership_TypesWhereInput
  }


  /**
   * Ownership_Types.DocMain
   */
  export type Ownership_Types$DocMainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    where?: DocMainWhereInput
    orderBy?: DocMainOrderByWithRelationInput | DocMainOrderByWithRelationInput[]
    cursor?: DocMainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocMainScalarFieldEnum | DocMainScalarFieldEnum[]
  }


  /**
   * Ownership_Types without action
   */
  export type Ownership_TypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ownership_Types
     */
    select?: Ownership_TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Ownership_TypesInclude<ExtArgs> | null
  }



  /**
   * Model Size
   */

  export type AggregateSize = {
    _count: SizeCountAggregateOutputType | null
    _avg: SizeAvgAggregateOutputType | null
    _sum: SizeSumAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  export type SizeAvgAggregateOutputType = {
    ID: number | null
  }

  export type SizeSumAggregateOutputType = {
    ID: number | null
  }

  export type SizeMinAggregateOutputType = {
    ID: number | null
    zoma_ka: string | null
    zoma_en: string | null
  }

  export type SizeMaxAggregateOutputType = {
    ID: number | null
    zoma_ka: string | null
    zoma_en: string | null
  }

  export type SizeCountAggregateOutputType = {
    ID: number
    zoma_ka: number
    zoma_en: number
    _all: number
  }


  export type SizeAvgAggregateInputType = {
    ID?: true
  }

  export type SizeSumAggregateInputType = {
    ID?: true
  }

  export type SizeMinAggregateInputType = {
    ID?: true
    zoma_ka?: true
    zoma_en?: true
  }

  export type SizeMaxAggregateInputType = {
    ID?: true
    zoma_ka?: true
    zoma_en?: true
  }

  export type SizeCountAggregateInputType = {
    ID?: true
    zoma_ka?: true
    zoma_en?: true
    _all?: true
  }

  export type SizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Size to aggregate.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sizes
    **/
    _count?: true | SizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizeMaxAggregateInputType
  }

  export type GetSizeAggregateType<T extends SizeAggregateArgs> = {
        [P in keyof T & keyof AggregateSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSize[P]>
      : GetScalarType<T[P], AggregateSize[P]>
  }




  export type SizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
    orderBy?: SizeOrderByWithAggregationInput | SizeOrderByWithAggregationInput[]
    by: SizeScalarFieldEnum[] | SizeScalarFieldEnum
    having?: SizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizeCountAggregateInputType | true
    _avg?: SizeAvgAggregateInputType
    _sum?: SizeSumAggregateInputType
    _min?: SizeMinAggregateInputType
    _max?: SizeMaxAggregateInputType
  }

  export type SizeGroupByOutputType = {
    ID: number
    zoma_ka: string
    zoma_en: string
    _count: SizeCountAggregateOutputType | null
    _avg: SizeAvgAggregateOutputType | null
    _sum: SizeSumAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  type GetSizeGroupByPayload<T extends SizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizeGroupByOutputType[P]>
            : GetScalarType<T[P], SizeGroupByOutputType[P]>
        }
      >
    >


  export type SizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    zoma_ka?: boolean
    zoma_en?: boolean
    DocMain?: boolean | Size$DocMainArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["size"]>

  export type SizeSelectScalar = {
    ID?: boolean
    zoma_ka?: boolean
    zoma_en?: boolean
  }

  export type SizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DocMain?: boolean | Size$DocMainArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Size"
    objects: {
      DocMain: Prisma.$DocMainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      zoma_ka: string
      zoma_en: string
    }, ExtArgs["result"]["size"]>
    composites: {}
  }


  type SizeGetPayload<S extends boolean | null | undefined | SizeDefaultArgs> = $Result.GetResult<Prisma.$SizePayload, S>

  type SizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SizeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SizeCountAggregateInputType | true
    }

  export interface SizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Size'], meta: { name: 'Size' } }
    /**
     * Find zero or one Size that matches the filter.
     * @param {SizeFindUniqueArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SizeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SizeFindUniqueArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Size that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SizeFindUniqueOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SizeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Size that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SizeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindFirstArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Size that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SizeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.size.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.size.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const sizeWithIDOnly = await prisma.size.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends SizeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Size.
     * @param {SizeCreateArgs} args - Arguments to create a Size.
     * @example
     * // Create one Size
     * const Size = await prisma.size.create({
     *   data: {
     *     // ... data to create a Size
     *   }
     * })
     * 
    **/
    create<T extends SizeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SizeCreateArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sizes.
     *     @param {SizeCreateManyArgs} args - Arguments to create many Sizes.
     *     @example
     *     // Create many Sizes
     *     const size = await prisma.size.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SizeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Size.
     * @param {SizeDeleteArgs} args - Arguments to delete one Size.
     * @example
     * // Delete one Size
     * const Size = await prisma.size.delete({
     *   where: {
     *     // ... filter to delete one Size
     *   }
     * })
     * 
    **/
    delete<T extends SizeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SizeDeleteArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Size.
     * @param {SizeUpdateArgs} args - Arguments to update one Size.
     * @example
     * // Update one Size
     * const size = await prisma.size.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SizeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SizeUpdateArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sizes.
     * @param {SizeDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.size.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SizeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SizeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SizeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Size.
     * @param {SizeUpsertArgs} args - Arguments to update or create a Size.
     * @example
     * // Update or create a Size
     * const size = await prisma.size.upsert({
     *   create: {
     *     // ... data to create a Size
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Size we want to update
     *   }
     * })
    **/
    upsert<T extends SizeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SizeUpsertArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.size.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends SizeCountArgs>(
      args?: Subset<T, SizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SizeAggregateArgs>(args: Subset<T, SizeAggregateArgs>): Prisma.PrismaPromise<GetSizeAggregateType<T>>

    /**
     * Group by Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SizeGroupByArgs['orderBy'] }
        : { orderBy?: SizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Size model
   */
  readonly fields: SizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Size.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DocMain<T extends Size$DocMainArgs<ExtArgs> = {}>(args?: Subset<T, Size$DocMainArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocMainPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Size model
   */ 
  interface SizeFieldRefs {
    readonly ID: FieldRef<"Size", 'Int'>
    readonly zoma_ka: FieldRef<"Size", 'String'>
    readonly zoma_en: FieldRef<"Size", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Size findUnique
   */
  export type SizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size findUniqueOrThrow
   */
  export type SizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size findFirst
   */
  export type SizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }


  /**
   * Size findFirstOrThrow
   */
  export type SizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }


  /**
   * Size findMany
   */
  export type SizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }


  /**
   * Size create
   */
  export type SizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to create a Size.
     */
    data: XOR<SizeCreateInput, SizeUncheckedCreateInput>
  }


  /**
   * Size createMany
   */
  export type SizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sizes.
     */
    data: SizeCreateManyInput | SizeCreateManyInput[]
  }


  /**
   * Size update
   */
  export type SizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to update a Size.
     */
    data: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
    /**
     * Choose, which Size to update.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size updateMany
   */
  export type SizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizeWhereInput
  }


  /**
   * Size upsert
   */
  export type SizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The filter to search for the Size to update in case it exists.
     */
    where: SizeWhereUniqueInput
    /**
     * In case the Size found by the `where` argument doesn't exist, create a new Size with this data.
     */
    create: XOR<SizeCreateInput, SizeUncheckedCreateInput>
    /**
     * In case the Size was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
  }


  /**
   * Size delete
   */
  export type SizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter which Size to delete.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size deleteMany
   */
  export type SizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to delete
     */
    where?: SizeWhereInput
  }


  /**
   * Size.DocMain
   */
  export type Size$DocMainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocMain
     */
    select?: DocMainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DocMainInclude<ExtArgs> | null
    where?: DocMainWhereInput
    orderBy?: DocMainOrderByWithRelationInput | DocMainOrderByWithRelationInput[]
    cursor?: DocMainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocMainScalarFieldEnum | DocMainScalarFieldEnum[]
  }


  /**
   * Size without action
   */
  export type SizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DocMainScalarFieldEnum: {
    Stat_ID: 'Stat_ID',
    Legal_Code: 'Legal_Code',
    Personal_no: 'Personal_no',
    Legal_Form_ID: 'Legal_Form_ID',
    Full_Name: 'Full_Name',
    Ownership_Type_ID: 'Ownership_Type_ID',
    ISActive: 'ISActive',
    Zoma_ID: 'Zoma_ID',
    Reg_Date: 'Reg_Date',
    Init_Reg_date: 'Init_Reg_date',
    Change: 'Change'
  };

  export type DocMainScalarFieldEnum = (typeof DocMainScalarFieldEnum)[keyof typeof DocMainScalarFieldEnum]


  export const Legal_FormsScalarFieldEnum: {
    ID: 'ID',
    Abbreviation_ka: 'Abbreviation_ka',
    Abbreviation_en: 'Abbreviation_en',
    Legal_Form_ka: 'Legal_Form_ka',
    Legal_Form_en: 'Legal_Form_en'
  };

  export type Legal_FormsScalarFieldEnum = (typeof Legal_FormsScalarFieldEnum)[keyof typeof Legal_FormsScalarFieldEnum]


  export const Ownership_TypesScalarFieldEnum: {
    ID: 'ID',
    Ownership_Type_ka: 'Ownership_Type_ka',
    Ownership_Type_en: 'Ownership_Type_en'
  };

  export type Ownership_TypesScalarFieldEnum = (typeof Ownership_TypesScalarFieldEnum)[keyof typeof Ownership_TypesScalarFieldEnum]


  export const SizeScalarFieldEnum: {
    ID: 'ID',
    zoma_ka: 'zoma_ka',
    zoma_en: 'zoma_en'
  };

  export type SizeScalarFieldEnum = (typeof SizeScalarFieldEnum)[keyof typeof SizeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DocMainWhereInput = {
    AND?: DocMainWhereInput | DocMainWhereInput[]
    OR?: DocMainWhereInput[]
    NOT?: DocMainWhereInput | DocMainWhereInput[]
    Stat_ID?: IntFilter<"DocMain"> | number
    Legal_Code?: IntFilter<"DocMain"> | number
    Personal_no?: StringFilter<"DocMain"> | string
    Legal_Form_ID?: IntFilter<"DocMain"> | number
    Full_Name?: StringFilter<"DocMain"> | string
    Ownership_Type_ID?: IntFilter<"DocMain"> | number
    ISActive?: IntNullableFilter<"DocMain"> | number | null
    Zoma_ID?: IntFilter<"DocMain"> | number
    Reg_Date?: DateTimeFilter<"DocMain"> | Date | string
    Init_Reg_date?: DateTimeFilter<"DocMain"> | Date | string
    Change?: IntNullableFilter<"DocMain"> | number | null
    Legal_Forms?: XOR<Legal_FormsRelationFilter, Legal_FormsWhereInput>
    Ownership_Types?: XOR<Ownership_TypesRelationFilter, Ownership_TypesWhereInput>
    Zoma?: XOR<SizeRelationFilter, SizeWhereInput>
  }

  export type DocMainOrderByWithRelationInput = {
    Stat_ID?: SortOrder
    Legal_Code?: SortOrder
    Personal_no?: SortOrder
    Legal_Form_ID?: SortOrder
    Full_Name?: SortOrder
    Ownership_Type_ID?: SortOrder
    ISActive?: SortOrderInput | SortOrder
    Zoma_ID?: SortOrder
    Reg_Date?: SortOrder
    Init_Reg_date?: SortOrder
    Change?: SortOrderInput | SortOrder
    Legal_Forms?: Legal_FormsOrderByWithRelationInput
    Ownership_Types?: Ownership_TypesOrderByWithRelationInput
    Zoma?: SizeOrderByWithRelationInput
  }

  export type DocMainWhereUniqueInput = Prisma.AtLeast<{
    Stat_ID?: number
    AND?: DocMainWhereInput | DocMainWhereInput[]
    OR?: DocMainWhereInput[]
    NOT?: DocMainWhereInput | DocMainWhereInput[]
    Legal_Code?: IntFilter<"DocMain"> | number
    Personal_no?: StringFilter<"DocMain"> | string
    Legal_Form_ID?: IntFilter<"DocMain"> | number
    Full_Name?: StringFilter<"DocMain"> | string
    Ownership_Type_ID?: IntFilter<"DocMain"> | number
    ISActive?: IntNullableFilter<"DocMain"> | number | null
    Zoma_ID?: IntFilter<"DocMain"> | number
    Reg_Date?: DateTimeFilter<"DocMain"> | Date | string
    Init_Reg_date?: DateTimeFilter<"DocMain"> | Date | string
    Change?: IntNullableFilter<"DocMain"> | number | null
    Legal_Forms?: XOR<Legal_FormsRelationFilter, Legal_FormsWhereInput>
    Ownership_Types?: XOR<Ownership_TypesRelationFilter, Ownership_TypesWhereInput>
    Zoma?: XOR<SizeRelationFilter, SizeWhereInput>
  }, "Stat_ID">

  export type DocMainOrderByWithAggregationInput = {
    Stat_ID?: SortOrder
    Legal_Code?: SortOrder
    Personal_no?: SortOrder
    Legal_Form_ID?: SortOrder
    Full_Name?: SortOrder
    Ownership_Type_ID?: SortOrder
    ISActive?: SortOrderInput | SortOrder
    Zoma_ID?: SortOrder
    Reg_Date?: SortOrder
    Init_Reg_date?: SortOrder
    Change?: SortOrderInput | SortOrder
    _count?: DocMainCountOrderByAggregateInput
    _avg?: DocMainAvgOrderByAggregateInput
    _max?: DocMainMaxOrderByAggregateInput
    _min?: DocMainMinOrderByAggregateInput
    _sum?: DocMainSumOrderByAggregateInput
  }

  export type DocMainScalarWhereWithAggregatesInput = {
    AND?: DocMainScalarWhereWithAggregatesInput | DocMainScalarWhereWithAggregatesInput[]
    OR?: DocMainScalarWhereWithAggregatesInput[]
    NOT?: DocMainScalarWhereWithAggregatesInput | DocMainScalarWhereWithAggregatesInput[]
    Stat_ID?: IntWithAggregatesFilter<"DocMain"> | number
    Legal_Code?: IntWithAggregatesFilter<"DocMain"> | number
    Personal_no?: StringWithAggregatesFilter<"DocMain"> | string
    Legal_Form_ID?: IntWithAggregatesFilter<"DocMain"> | number
    Full_Name?: StringWithAggregatesFilter<"DocMain"> | string
    Ownership_Type_ID?: IntWithAggregatesFilter<"DocMain"> | number
    ISActive?: IntNullableWithAggregatesFilter<"DocMain"> | number | null
    Zoma_ID?: IntWithAggregatesFilter<"DocMain"> | number
    Reg_Date?: DateTimeWithAggregatesFilter<"DocMain"> | Date | string
    Init_Reg_date?: DateTimeWithAggregatesFilter<"DocMain"> | Date | string
    Change?: IntNullableWithAggregatesFilter<"DocMain"> | number | null
  }

  export type Legal_FormsWhereInput = {
    AND?: Legal_FormsWhereInput | Legal_FormsWhereInput[]
    OR?: Legal_FormsWhereInput[]
    NOT?: Legal_FormsWhereInput | Legal_FormsWhereInput[]
    ID?: IntFilter<"Legal_Forms"> | number
    Abbreviation_ka?: StringFilter<"Legal_Forms"> | string
    Abbreviation_en?: StringFilter<"Legal_Forms"> | string
    Legal_Form_ka?: StringFilter<"Legal_Forms"> | string
    Legal_Form_en?: StringFilter<"Legal_Forms"> | string
    DocMain?: DocMainListRelationFilter
  }

  export type Legal_FormsOrderByWithRelationInput = {
    ID?: SortOrder
    Abbreviation_ka?: SortOrder
    Abbreviation_en?: SortOrder
    Legal_Form_ka?: SortOrder
    Legal_Form_en?: SortOrder
    DocMain?: DocMainOrderByRelationAggregateInput
  }

  export type Legal_FormsWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: Legal_FormsWhereInput | Legal_FormsWhereInput[]
    OR?: Legal_FormsWhereInput[]
    NOT?: Legal_FormsWhereInput | Legal_FormsWhereInput[]
    Abbreviation_ka?: StringFilter<"Legal_Forms"> | string
    Abbreviation_en?: StringFilter<"Legal_Forms"> | string
    Legal_Form_ka?: StringFilter<"Legal_Forms"> | string
    Legal_Form_en?: StringFilter<"Legal_Forms"> | string
    DocMain?: DocMainListRelationFilter
  }, "ID">

  export type Legal_FormsOrderByWithAggregationInput = {
    ID?: SortOrder
    Abbreviation_ka?: SortOrder
    Abbreviation_en?: SortOrder
    Legal_Form_ka?: SortOrder
    Legal_Form_en?: SortOrder
    _count?: Legal_FormsCountOrderByAggregateInput
    _avg?: Legal_FormsAvgOrderByAggregateInput
    _max?: Legal_FormsMaxOrderByAggregateInput
    _min?: Legal_FormsMinOrderByAggregateInput
    _sum?: Legal_FormsSumOrderByAggregateInput
  }

  export type Legal_FormsScalarWhereWithAggregatesInput = {
    AND?: Legal_FormsScalarWhereWithAggregatesInput | Legal_FormsScalarWhereWithAggregatesInput[]
    OR?: Legal_FormsScalarWhereWithAggregatesInput[]
    NOT?: Legal_FormsScalarWhereWithAggregatesInput | Legal_FormsScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Legal_Forms"> | number
    Abbreviation_ka?: StringWithAggregatesFilter<"Legal_Forms"> | string
    Abbreviation_en?: StringWithAggregatesFilter<"Legal_Forms"> | string
    Legal_Form_ka?: StringWithAggregatesFilter<"Legal_Forms"> | string
    Legal_Form_en?: StringWithAggregatesFilter<"Legal_Forms"> | string
  }

  export type Ownership_TypesWhereInput = {
    AND?: Ownership_TypesWhereInput | Ownership_TypesWhereInput[]
    OR?: Ownership_TypesWhereInput[]
    NOT?: Ownership_TypesWhereInput | Ownership_TypesWhereInput[]
    ID?: IntFilter<"Ownership_Types"> | number
    Ownership_Type_ka?: StringFilter<"Ownership_Types"> | string
    Ownership_Type_en?: StringFilter<"Ownership_Types"> | string
    DocMain?: DocMainListRelationFilter
  }

  export type Ownership_TypesOrderByWithRelationInput = {
    ID?: SortOrder
    Ownership_Type_ka?: SortOrder
    Ownership_Type_en?: SortOrder
    DocMain?: DocMainOrderByRelationAggregateInput
  }

  export type Ownership_TypesWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: Ownership_TypesWhereInput | Ownership_TypesWhereInput[]
    OR?: Ownership_TypesWhereInput[]
    NOT?: Ownership_TypesWhereInput | Ownership_TypesWhereInput[]
    Ownership_Type_ka?: StringFilter<"Ownership_Types"> | string
    Ownership_Type_en?: StringFilter<"Ownership_Types"> | string
    DocMain?: DocMainListRelationFilter
  }, "ID">

  export type Ownership_TypesOrderByWithAggregationInput = {
    ID?: SortOrder
    Ownership_Type_ka?: SortOrder
    Ownership_Type_en?: SortOrder
    _count?: Ownership_TypesCountOrderByAggregateInput
    _avg?: Ownership_TypesAvgOrderByAggregateInput
    _max?: Ownership_TypesMaxOrderByAggregateInput
    _min?: Ownership_TypesMinOrderByAggregateInput
    _sum?: Ownership_TypesSumOrderByAggregateInput
  }

  export type Ownership_TypesScalarWhereWithAggregatesInput = {
    AND?: Ownership_TypesScalarWhereWithAggregatesInput | Ownership_TypesScalarWhereWithAggregatesInput[]
    OR?: Ownership_TypesScalarWhereWithAggregatesInput[]
    NOT?: Ownership_TypesScalarWhereWithAggregatesInput | Ownership_TypesScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Ownership_Types"> | number
    Ownership_Type_ka?: StringWithAggregatesFilter<"Ownership_Types"> | string
    Ownership_Type_en?: StringWithAggregatesFilter<"Ownership_Types"> | string
  }

  export type SizeWhereInput = {
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    ID?: IntFilter<"Size"> | number
    zoma_ka?: StringFilter<"Size"> | string
    zoma_en?: StringFilter<"Size"> | string
    DocMain?: DocMainListRelationFilter
  }

  export type SizeOrderByWithRelationInput = {
    ID?: SortOrder
    zoma_ka?: SortOrder
    zoma_en?: SortOrder
    DocMain?: DocMainOrderByRelationAggregateInput
  }

  export type SizeWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    zoma_ka?: StringFilter<"Size"> | string
    zoma_en?: StringFilter<"Size"> | string
    DocMain?: DocMainListRelationFilter
  }, "ID">

  export type SizeOrderByWithAggregationInput = {
    ID?: SortOrder
    zoma_ka?: SortOrder
    zoma_en?: SortOrder
    _count?: SizeCountOrderByAggregateInput
    _avg?: SizeAvgOrderByAggregateInput
    _max?: SizeMaxOrderByAggregateInput
    _min?: SizeMinOrderByAggregateInput
    _sum?: SizeSumOrderByAggregateInput
  }

  export type SizeScalarWhereWithAggregatesInput = {
    AND?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    OR?: SizeScalarWhereWithAggregatesInput[]
    NOT?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Size"> | number
    zoma_ka?: StringWithAggregatesFilter<"Size"> | string
    zoma_en?: StringWithAggregatesFilter<"Size"> | string
  }

  export type DocMainCreateInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Full_Name: string
    ISActive?: number | null
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
    Legal_Forms: Legal_FormsCreateNestedOneWithoutDocMainInput
    Ownership_Types: Ownership_TypesCreateNestedOneWithoutDocMainInput
    Zoma: SizeCreateNestedOneWithoutDocMainInput
  }

  export type DocMainUncheckedCreateInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Legal_Form_ID: number
    Full_Name: string
    Ownership_Type_ID: number
    ISActive?: number | null
    Zoma_ID: number
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
  }

  export type DocMainUpdateInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Full_Name?: StringFieldUpdateOperationsInput | string
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
    Legal_Forms?: Legal_FormsUpdateOneRequiredWithoutDocMainNestedInput
    Ownership_Types?: Ownership_TypesUpdateOneRequiredWithoutDocMainNestedInput
    Zoma?: SizeUpdateOneRequiredWithoutDocMainNestedInput
  }

  export type DocMainUncheckedUpdateInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Legal_Form_ID?: IntFieldUpdateOperationsInput | number
    Full_Name?: StringFieldUpdateOperationsInput | string
    Ownership_Type_ID?: IntFieldUpdateOperationsInput | number
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Zoma_ID?: IntFieldUpdateOperationsInput | number
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocMainCreateManyInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Legal_Form_ID: number
    Full_Name: string
    Ownership_Type_ID: number
    ISActive?: number | null
    Zoma_ID: number
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
  }

  export type DocMainUpdateManyMutationInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Full_Name?: StringFieldUpdateOperationsInput | string
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocMainUncheckedUpdateManyInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Legal_Form_ID?: IntFieldUpdateOperationsInput | number
    Full_Name?: StringFieldUpdateOperationsInput | string
    Ownership_Type_ID?: IntFieldUpdateOperationsInput | number
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Zoma_ID?: IntFieldUpdateOperationsInput | number
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Legal_FormsCreateInput = {
    ID: number
    Abbreviation_ka: string
    Abbreviation_en: string
    Legal_Form_ka: string
    Legal_Form_en: string
    DocMain?: DocMainCreateNestedManyWithoutLegal_FormsInput
  }

  export type Legal_FormsUncheckedCreateInput = {
    ID: number
    Abbreviation_ka: string
    Abbreviation_en: string
    Legal_Form_ka: string
    Legal_Form_en: string
    DocMain?: DocMainUncheckedCreateNestedManyWithoutLegal_FormsInput
  }

  export type Legal_FormsUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Abbreviation_ka?: StringFieldUpdateOperationsInput | string
    Abbreviation_en?: StringFieldUpdateOperationsInput | string
    Legal_Form_ka?: StringFieldUpdateOperationsInput | string
    Legal_Form_en?: StringFieldUpdateOperationsInput | string
    DocMain?: DocMainUpdateManyWithoutLegal_FormsNestedInput
  }

  export type Legal_FormsUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Abbreviation_ka?: StringFieldUpdateOperationsInput | string
    Abbreviation_en?: StringFieldUpdateOperationsInput | string
    Legal_Form_ka?: StringFieldUpdateOperationsInput | string
    Legal_Form_en?: StringFieldUpdateOperationsInput | string
    DocMain?: DocMainUncheckedUpdateManyWithoutLegal_FormsNestedInput
  }

  export type Legal_FormsCreateManyInput = {
    ID: number
    Abbreviation_ka: string
    Abbreviation_en: string
    Legal_Form_ka: string
    Legal_Form_en: string
  }

  export type Legal_FormsUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Abbreviation_ka?: StringFieldUpdateOperationsInput | string
    Abbreviation_en?: StringFieldUpdateOperationsInput | string
    Legal_Form_ka?: StringFieldUpdateOperationsInput | string
    Legal_Form_en?: StringFieldUpdateOperationsInput | string
  }

  export type Legal_FormsUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Abbreviation_ka?: StringFieldUpdateOperationsInput | string
    Abbreviation_en?: StringFieldUpdateOperationsInput | string
    Legal_Form_ka?: StringFieldUpdateOperationsInput | string
    Legal_Form_en?: StringFieldUpdateOperationsInput | string
  }

  export type Ownership_TypesCreateInput = {
    ID: number
    Ownership_Type_ka: string
    Ownership_Type_en: string
    DocMain?: DocMainCreateNestedManyWithoutOwnership_TypesInput
  }

  export type Ownership_TypesUncheckedCreateInput = {
    ID: number
    Ownership_Type_ka: string
    Ownership_Type_en: string
    DocMain?: DocMainUncheckedCreateNestedManyWithoutOwnership_TypesInput
  }

  export type Ownership_TypesUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Ownership_Type_ka?: StringFieldUpdateOperationsInput | string
    Ownership_Type_en?: StringFieldUpdateOperationsInput | string
    DocMain?: DocMainUpdateManyWithoutOwnership_TypesNestedInput
  }

  export type Ownership_TypesUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Ownership_Type_ka?: StringFieldUpdateOperationsInput | string
    Ownership_Type_en?: StringFieldUpdateOperationsInput | string
    DocMain?: DocMainUncheckedUpdateManyWithoutOwnership_TypesNestedInput
  }

  export type Ownership_TypesCreateManyInput = {
    ID: number
    Ownership_Type_ka: string
    Ownership_Type_en: string
  }

  export type Ownership_TypesUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Ownership_Type_ka?: StringFieldUpdateOperationsInput | string
    Ownership_Type_en?: StringFieldUpdateOperationsInput | string
  }

  export type Ownership_TypesUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Ownership_Type_ka?: StringFieldUpdateOperationsInput | string
    Ownership_Type_en?: StringFieldUpdateOperationsInput | string
  }

  export type SizeCreateInput = {
    ID: number
    zoma_ka: string
    zoma_en: string
    DocMain?: DocMainCreateNestedManyWithoutZomaInput
  }

  export type SizeUncheckedCreateInput = {
    ID: number
    zoma_ka: string
    zoma_en: string
    DocMain?: DocMainUncheckedCreateNestedManyWithoutZomaInput
  }

  export type SizeUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    zoma_ka?: StringFieldUpdateOperationsInput | string
    zoma_en?: StringFieldUpdateOperationsInput | string
    DocMain?: DocMainUpdateManyWithoutZomaNestedInput
  }

  export type SizeUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    zoma_ka?: StringFieldUpdateOperationsInput | string
    zoma_en?: StringFieldUpdateOperationsInput | string
    DocMain?: DocMainUncheckedUpdateManyWithoutZomaNestedInput
  }

  export type SizeCreateManyInput = {
    ID: number
    zoma_ka: string
    zoma_en: string
  }

  export type SizeUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    zoma_ka?: StringFieldUpdateOperationsInput | string
    zoma_en?: StringFieldUpdateOperationsInput | string
  }

  export type SizeUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    zoma_ka?: StringFieldUpdateOperationsInput | string
    zoma_en?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Legal_FormsRelationFilter = {
    is?: Legal_FormsWhereInput
    isNot?: Legal_FormsWhereInput
  }

  export type Ownership_TypesRelationFilter = {
    is?: Ownership_TypesWhereInput
    isNot?: Ownership_TypesWhereInput
  }

  export type SizeRelationFilter = {
    is?: SizeWhereInput
    isNot?: SizeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocMainCountOrderByAggregateInput = {
    Stat_ID?: SortOrder
    Legal_Code?: SortOrder
    Personal_no?: SortOrder
    Legal_Form_ID?: SortOrder
    Full_Name?: SortOrder
    Ownership_Type_ID?: SortOrder
    ISActive?: SortOrder
    Zoma_ID?: SortOrder
    Reg_Date?: SortOrder
    Init_Reg_date?: SortOrder
    Change?: SortOrder
  }

  export type DocMainAvgOrderByAggregateInput = {
    Stat_ID?: SortOrder
    Legal_Code?: SortOrder
    Legal_Form_ID?: SortOrder
    Ownership_Type_ID?: SortOrder
    ISActive?: SortOrder
    Zoma_ID?: SortOrder
    Change?: SortOrder
  }

  export type DocMainMaxOrderByAggregateInput = {
    Stat_ID?: SortOrder
    Legal_Code?: SortOrder
    Personal_no?: SortOrder
    Legal_Form_ID?: SortOrder
    Full_Name?: SortOrder
    Ownership_Type_ID?: SortOrder
    ISActive?: SortOrder
    Zoma_ID?: SortOrder
    Reg_Date?: SortOrder
    Init_Reg_date?: SortOrder
    Change?: SortOrder
  }

  export type DocMainMinOrderByAggregateInput = {
    Stat_ID?: SortOrder
    Legal_Code?: SortOrder
    Personal_no?: SortOrder
    Legal_Form_ID?: SortOrder
    Full_Name?: SortOrder
    Ownership_Type_ID?: SortOrder
    ISActive?: SortOrder
    Zoma_ID?: SortOrder
    Reg_Date?: SortOrder
    Init_Reg_date?: SortOrder
    Change?: SortOrder
  }

  export type DocMainSumOrderByAggregateInput = {
    Stat_ID?: SortOrder
    Legal_Code?: SortOrder
    Legal_Form_ID?: SortOrder
    Ownership_Type_ID?: SortOrder
    ISActive?: SortOrder
    Zoma_ID?: SortOrder
    Change?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DocMainListRelationFilter = {
    every?: DocMainWhereInput
    some?: DocMainWhereInput
    none?: DocMainWhereInput
  }

  export type DocMainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Legal_FormsCountOrderByAggregateInput = {
    ID?: SortOrder
    Abbreviation_ka?: SortOrder
    Abbreviation_en?: SortOrder
    Legal_Form_ka?: SortOrder
    Legal_Form_en?: SortOrder
  }

  export type Legal_FormsAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type Legal_FormsMaxOrderByAggregateInput = {
    ID?: SortOrder
    Abbreviation_ka?: SortOrder
    Abbreviation_en?: SortOrder
    Legal_Form_ka?: SortOrder
    Legal_Form_en?: SortOrder
  }

  export type Legal_FormsMinOrderByAggregateInput = {
    ID?: SortOrder
    Abbreviation_ka?: SortOrder
    Abbreviation_en?: SortOrder
    Legal_Form_ka?: SortOrder
    Legal_Form_en?: SortOrder
  }

  export type Legal_FormsSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type Ownership_TypesCountOrderByAggregateInput = {
    ID?: SortOrder
    Ownership_Type_ka?: SortOrder
    Ownership_Type_en?: SortOrder
  }

  export type Ownership_TypesAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type Ownership_TypesMaxOrderByAggregateInput = {
    ID?: SortOrder
    Ownership_Type_ka?: SortOrder
    Ownership_Type_en?: SortOrder
  }

  export type Ownership_TypesMinOrderByAggregateInput = {
    ID?: SortOrder
    Ownership_Type_ka?: SortOrder
    Ownership_Type_en?: SortOrder
  }

  export type Ownership_TypesSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type SizeCountOrderByAggregateInput = {
    ID?: SortOrder
    zoma_ka?: SortOrder
    zoma_en?: SortOrder
  }

  export type SizeAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type SizeMaxOrderByAggregateInput = {
    ID?: SortOrder
    zoma_ka?: SortOrder
    zoma_en?: SortOrder
  }

  export type SizeMinOrderByAggregateInput = {
    ID?: SortOrder
    zoma_ka?: SortOrder
    zoma_en?: SortOrder
  }

  export type SizeSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type Legal_FormsCreateNestedOneWithoutDocMainInput = {
    create?: XOR<Legal_FormsCreateWithoutDocMainInput, Legal_FormsUncheckedCreateWithoutDocMainInput>
    connectOrCreate?: Legal_FormsCreateOrConnectWithoutDocMainInput
    connect?: Legal_FormsWhereUniqueInput
  }

  export type Ownership_TypesCreateNestedOneWithoutDocMainInput = {
    create?: XOR<Ownership_TypesCreateWithoutDocMainInput, Ownership_TypesUncheckedCreateWithoutDocMainInput>
    connectOrCreate?: Ownership_TypesCreateOrConnectWithoutDocMainInput
    connect?: Ownership_TypesWhereUniqueInput
  }

  export type SizeCreateNestedOneWithoutDocMainInput = {
    create?: XOR<SizeCreateWithoutDocMainInput, SizeUncheckedCreateWithoutDocMainInput>
    connectOrCreate?: SizeCreateOrConnectWithoutDocMainInput
    connect?: SizeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Legal_FormsUpdateOneRequiredWithoutDocMainNestedInput = {
    create?: XOR<Legal_FormsCreateWithoutDocMainInput, Legal_FormsUncheckedCreateWithoutDocMainInput>
    connectOrCreate?: Legal_FormsCreateOrConnectWithoutDocMainInput
    upsert?: Legal_FormsUpsertWithoutDocMainInput
    connect?: Legal_FormsWhereUniqueInput
    update?: XOR<XOR<Legal_FormsUpdateToOneWithWhereWithoutDocMainInput, Legal_FormsUpdateWithoutDocMainInput>, Legal_FormsUncheckedUpdateWithoutDocMainInput>
  }

  export type Ownership_TypesUpdateOneRequiredWithoutDocMainNestedInput = {
    create?: XOR<Ownership_TypesCreateWithoutDocMainInput, Ownership_TypesUncheckedCreateWithoutDocMainInput>
    connectOrCreate?: Ownership_TypesCreateOrConnectWithoutDocMainInput
    upsert?: Ownership_TypesUpsertWithoutDocMainInput
    connect?: Ownership_TypesWhereUniqueInput
    update?: XOR<XOR<Ownership_TypesUpdateToOneWithWhereWithoutDocMainInput, Ownership_TypesUpdateWithoutDocMainInput>, Ownership_TypesUncheckedUpdateWithoutDocMainInput>
  }

  export type SizeUpdateOneRequiredWithoutDocMainNestedInput = {
    create?: XOR<SizeCreateWithoutDocMainInput, SizeUncheckedCreateWithoutDocMainInput>
    connectOrCreate?: SizeCreateOrConnectWithoutDocMainInput
    upsert?: SizeUpsertWithoutDocMainInput
    connect?: SizeWhereUniqueInput
    update?: XOR<XOR<SizeUpdateToOneWithWhereWithoutDocMainInput, SizeUpdateWithoutDocMainInput>, SizeUncheckedUpdateWithoutDocMainInput>
  }

  export type DocMainCreateNestedManyWithoutLegal_FormsInput = {
    create?: XOR<DocMainCreateWithoutLegal_FormsInput, DocMainUncheckedCreateWithoutLegal_FormsInput> | DocMainCreateWithoutLegal_FormsInput[] | DocMainUncheckedCreateWithoutLegal_FormsInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutLegal_FormsInput | DocMainCreateOrConnectWithoutLegal_FormsInput[]
    createMany?: DocMainCreateManyLegal_FormsInputEnvelope
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
  }

  export type DocMainUncheckedCreateNestedManyWithoutLegal_FormsInput = {
    create?: XOR<DocMainCreateWithoutLegal_FormsInput, DocMainUncheckedCreateWithoutLegal_FormsInput> | DocMainCreateWithoutLegal_FormsInput[] | DocMainUncheckedCreateWithoutLegal_FormsInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutLegal_FormsInput | DocMainCreateOrConnectWithoutLegal_FormsInput[]
    createMany?: DocMainCreateManyLegal_FormsInputEnvelope
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
  }

  export type DocMainUpdateManyWithoutLegal_FormsNestedInput = {
    create?: XOR<DocMainCreateWithoutLegal_FormsInput, DocMainUncheckedCreateWithoutLegal_FormsInput> | DocMainCreateWithoutLegal_FormsInput[] | DocMainUncheckedCreateWithoutLegal_FormsInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutLegal_FormsInput | DocMainCreateOrConnectWithoutLegal_FormsInput[]
    upsert?: DocMainUpsertWithWhereUniqueWithoutLegal_FormsInput | DocMainUpsertWithWhereUniqueWithoutLegal_FormsInput[]
    createMany?: DocMainCreateManyLegal_FormsInputEnvelope
    set?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    disconnect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    delete?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    update?: DocMainUpdateWithWhereUniqueWithoutLegal_FormsInput | DocMainUpdateWithWhereUniqueWithoutLegal_FormsInput[]
    updateMany?: DocMainUpdateManyWithWhereWithoutLegal_FormsInput | DocMainUpdateManyWithWhereWithoutLegal_FormsInput[]
    deleteMany?: DocMainScalarWhereInput | DocMainScalarWhereInput[]
  }

  export type DocMainUncheckedUpdateManyWithoutLegal_FormsNestedInput = {
    create?: XOR<DocMainCreateWithoutLegal_FormsInput, DocMainUncheckedCreateWithoutLegal_FormsInput> | DocMainCreateWithoutLegal_FormsInput[] | DocMainUncheckedCreateWithoutLegal_FormsInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutLegal_FormsInput | DocMainCreateOrConnectWithoutLegal_FormsInput[]
    upsert?: DocMainUpsertWithWhereUniqueWithoutLegal_FormsInput | DocMainUpsertWithWhereUniqueWithoutLegal_FormsInput[]
    createMany?: DocMainCreateManyLegal_FormsInputEnvelope
    set?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    disconnect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    delete?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    update?: DocMainUpdateWithWhereUniqueWithoutLegal_FormsInput | DocMainUpdateWithWhereUniqueWithoutLegal_FormsInput[]
    updateMany?: DocMainUpdateManyWithWhereWithoutLegal_FormsInput | DocMainUpdateManyWithWhereWithoutLegal_FormsInput[]
    deleteMany?: DocMainScalarWhereInput | DocMainScalarWhereInput[]
  }

  export type DocMainCreateNestedManyWithoutOwnership_TypesInput = {
    create?: XOR<DocMainCreateWithoutOwnership_TypesInput, DocMainUncheckedCreateWithoutOwnership_TypesInput> | DocMainCreateWithoutOwnership_TypesInput[] | DocMainUncheckedCreateWithoutOwnership_TypesInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutOwnership_TypesInput | DocMainCreateOrConnectWithoutOwnership_TypesInput[]
    createMany?: DocMainCreateManyOwnership_TypesInputEnvelope
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
  }

  export type DocMainUncheckedCreateNestedManyWithoutOwnership_TypesInput = {
    create?: XOR<DocMainCreateWithoutOwnership_TypesInput, DocMainUncheckedCreateWithoutOwnership_TypesInput> | DocMainCreateWithoutOwnership_TypesInput[] | DocMainUncheckedCreateWithoutOwnership_TypesInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutOwnership_TypesInput | DocMainCreateOrConnectWithoutOwnership_TypesInput[]
    createMany?: DocMainCreateManyOwnership_TypesInputEnvelope
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
  }

  export type DocMainUpdateManyWithoutOwnership_TypesNestedInput = {
    create?: XOR<DocMainCreateWithoutOwnership_TypesInput, DocMainUncheckedCreateWithoutOwnership_TypesInput> | DocMainCreateWithoutOwnership_TypesInput[] | DocMainUncheckedCreateWithoutOwnership_TypesInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutOwnership_TypesInput | DocMainCreateOrConnectWithoutOwnership_TypesInput[]
    upsert?: DocMainUpsertWithWhereUniqueWithoutOwnership_TypesInput | DocMainUpsertWithWhereUniqueWithoutOwnership_TypesInput[]
    createMany?: DocMainCreateManyOwnership_TypesInputEnvelope
    set?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    disconnect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    delete?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    update?: DocMainUpdateWithWhereUniqueWithoutOwnership_TypesInput | DocMainUpdateWithWhereUniqueWithoutOwnership_TypesInput[]
    updateMany?: DocMainUpdateManyWithWhereWithoutOwnership_TypesInput | DocMainUpdateManyWithWhereWithoutOwnership_TypesInput[]
    deleteMany?: DocMainScalarWhereInput | DocMainScalarWhereInput[]
  }

  export type DocMainUncheckedUpdateManyWithoutOwnership_TypesNestedInput = {
    create?: XOR<DocMainCreateWithoutOwnership_TypesInput, DocMainUncheckedCreateWithoutOwnership_TypesInput> | DocMainCreateWithoutOwnership_TypesInput[] | DocMainUncheckedCreateWithoutOwnership_TypesInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutOwnership_TypesInput | DocMainCreateOrConnectWithoutOwnership_TypesInput[]
    upsert?: DocMainUpsertWithWhereUniqueWithoutOwnership_TypesInput | DocMainUpsertWithWhereUniqueWithoutOwnership_TypesInput[]
    createMany?: DocMainCreateManyOwnership_TypesInputEnvelope
    set?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    disconnect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    delete?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    update?: DocMainUpdateWithWhereUniqueWithoutOwnership_TypesInput | DocMainUpdateWithWhereUniqueWithoutOwnership_TypesInput[]
    updateMany?: DocMainUpdateManyWithWhereWithoutOwnership_TypesInput | DocMainUpdateManyWithWhereWithoutOwnership_TypesInput[]
    deleteMany?: DocMainScalarWhereInput | DocMainScalarWhereInput[]
  }

  export type DocMainCreateNestedManyWithoutZomaInput = {
    create?: XOR<DocMainCreateWithoutZomaInput, DocMainUncheckedCreateWithoutZomaInput> | DocMainCreateWithoutZomaInput[] | DocMainUncheckedCreateWithoutZomaInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutZomaInput | DocMainCreateOrConnectWithoutZomaInput[]
    createMany?: DocMainCreateManyZomaInputEnvelope
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
  }

  export type DocMainUncheckedCreateNestedManyWithoutZomaInput = {
    create?: XOR<DocMainCreateWithoutZomaInput, DocMainUncheckedCreateWithoutZomaInput> | DocMainCreateWithoutZomaInput[] | DocMainUncheckedCreateWithoutZomaInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutZomaInput | DocMainCreateOrConnectWithoutZomaInput[]
    createMany?: DocMainCreateManyZomaInputEnvelope
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
  }

  export type DocMainUpdateManyWithoutZomaNestedInput = {
    create?: XOR<DocMainCreateWithoutZomaInput, DocMainUncheckedCreateWithoutZomaInput> | DocMainCreateWithoutZomaInput[] | DocMainUncheckedCreateWithoutZomaInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutZomaInput | DocMainCreateOrConnectWithoutZomaInput[]
    upsert?: DocMainUpsertWithWhereUniqueWithoutZomaInput | DocMainUpsertWithWhereUniqueWithoutZomaInput[]
    createMany?: DocMainCreateManyZomaInputEnvelope
    set?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    disconnect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    delete?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    update?: DocMainUpdateWithWhereUniqueWithoutZomaInput | DocMainUpdateWithWhereUniqueWithoutZomaInput[]
    updateMany?: DocMainUpdateManyWithWhereWithoutZomaInput | DocMainUpdateManyWithWhereWithoutZomaInput[]
    deleteMany?: DocMainScalarWhereInput | DocMainScalarWhereInput[]
  }

  export type DocMainUncheckedUpdateManyWithoutZomaNestedInput = {
    create?: XOR<DocMainCreateWithoutZomaInput, DocMainUncheckedCreateWithoutZomaInput> | DocMainCreateWithoutZomaInput[] | DocMainUncheckedCreateWithoutZomaInput[]
    connectOrCreate?: DocMainCreateOrConnectWithoutZomaInput | DocMainCreateOrConnectWithoutZomaInput[]
    upsert?: DocMainUpsertWithWhereUniqueWithoutZomaInput | DocMainUpsertWithWhereUniqueWithoutZomaInput[]
    createMany?: DocMainCreateManyZomaInputEnvelope
    set?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    disconnect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    delete?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    connect?: DocMainWhereUniqueInput | DocMainWhereUniqueInput[]
    update?: DocMainUpdateWithWhereUniqueWithoutZomaInput | DocMainUpdateWithWhereUniqueWithoutZomaInput[]
    updateMany?: DocMainUpdateManyWithWhereWithoutZomaInput | DocMainUpdateManyWithWhereWithoutZomaInput[]
    deleteMany?: DocMainScalarWhereInput | DocMainScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Legal_FormsCreateWithoutDocMainInput = {
    ID: number
    Abbreviation_ka: string
    Abbreviation_en: string
    Legal_Form_ka: string
    Legal_Form_en: string
  }

  export type Legal_FormsUncheckedCreateWithoutDocMainInput = {
    ID: number
    Abbreviation_ka: string
    Abbreviation_en: string
    Legal_Form_ka: string
    Legal_Form_en: string
  }

  export type Legal_FormsCreateOrConnectWithoutDocMainInput = {
    where: Legal_FormsWhereUniqueInput
    create: XOR<Legal_FormsCreateWithoutDocMainInput, Legal_FormsUncheckedCreateWithoutDocMainInput>
  }

  export type Ownership_TypesCreateWithoutDocMainInput = {
    ID: number
    Ownership_Type_ka: string
    Ownership_Type_en: string
  }

  export type Ownership_TypesUncheckedCreateWithoutDocMainInput = {
    ID: number
    Ownership_Type_ka: string
    Ownership_Type_en: string
  }

  export type Ownership_TypesCreateOrConnectWithoutDocMainInput = {
    where: Ownership_TypesWhereUniqueInput
    create: XOR<Ownership_TypesCreateWithoutDocMainInput, Ownership_TypesUncheckedCreateWithoutDocMainInput>
  }

  export type SizeCreateWithoutDocMainInput = {
    ID: number
    zoma_ka: string
    zoma_en: string
  }

  export type SizeUncheckedCreateWithoutDocMainInput = {
    ID: number
    zoma_ka: string
    zoma_en: string
  }

  export type SizeCreateOrConnectWithoutDocMainInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutDocMainInput, SizeUncheckedCreateWithoutDocMainInput>
  }

  export type Legal_FormsUpsertWithoutDocMainInput = {
    update: XOR<Legal_FormsUpdateWithoutDocMainInput, Legal_FormsUncheckedUpdateWithoutDocMainInput>
    create: XOR<Legal_FormsCreateWithoutDocMainInput, Legal_FormsUncheckedCreateWithoutDocMainInput>
    where?: Legal_FormsWhereInput
  }

  export type Legal_FormsUpdateToOneWithWhereWithoutDocMainInput = {
    where?: Legal_FormsWhereInput
    data: XOR<Legal_FormsUpdateWithoutDocMainInput, Legal_FormsUncheckedUpdateWithoutDocMainInput>
  }

  export type Legal_FormsUpdateWithoutDocMainInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Abbreviation_ka?: StringFieldUpdateOperationsInput | string
    Abbreviation_en?: StringFieldUpdateOperationsInput | string
    Legal_Form_ka?: StringFieldUpdateOperationsInput | string
    Legal_Form_en?: StringFieldUpdateOperationsInput | string
  }

  export type Legal_FormsUncheckedUpdateWithoutDocMainInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Abbreviation_ka?: StringFieldUpdateOperationsInput | string
    Abbreviation_en?: StringFieldUpdateOperationsInput | string
    Legal_Form_ka?: StringFieldUpdateOperationsInput | string
    Legal_Form_en?: StringFieldUpdateOperationsInput | string
  }

  export type Ownership_TypesUpsertWithoutDocMainInput = {
    update: XOR<Ownership_TypesUpdateWithoutDocMainInput, Ownership_TypesUncheckedUpdateWithoutDocMainInput>
    create: XOR<Ownership_TypesCreateWithoutDocMainInput, Ownership_TypesUncheckedCreateWithoutDocMainInput>
    where?: Ownership_TypesWhereInput
  }

  export type Ownership_TypesUpdateToOneWithWhereWithoutDocMainInput = {
    where?: Ownership_TypesWhereInput
    data: XOR<Ownership_TypesUpdateWithoutDocMainInput, Ownership_TypesUncheckedUpdateWithoutDocMainInput>
  }

  export type Ownership_TypesUpdateWithoutDocMainInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Ownership_Type_ka?: StringFieldUpdateOperationsInput | string
    Ownership_Type_en?: StringFieldUpdateOperationsInput | string
  }

  export type Ownership_TypesUncheckedUpdateWithoutDocMainInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Ownership_Type_ka?: StringFieldUpdateOperationsInput | string
    Ownership_Type_en?: StringFieldUpdateOperationsInput | string
  }

  export type SizeUpsertWithoutDocMainInput = {
    update: XOR<SizeUpdateWithoutDocMainInput, SizeUncheckedUpdateWithoutDocMainInput>
    create: XOR<SizeCreateWithoutDocMainInput, SizeUncheckedCreateWithoutDocMainInput>
    where?: SizeWhereInput
  }

  export type SizeUpdateToOneWithWhereWithoutDocMainInput = {
    where?: SizeWhereInput
    data: XOR<SizeUpdateWithoutDocMainInput, SizeUncheckedUpdateWithoutDocMainInput>
  }

  export type SizeUpdateWithoutDocMainInput = {
    ID?: IntFieldUpdateOperationsInput | number
    zoma_ka?: StringFieldUpdateOperationsInput | string
    zoma_en?: StringFieldUpdateOperationsInput | string
  }

  export type SizeUncheckedUpdateWithoutDocMainInput = {
    ID?: IntFieldUpdateOperationsInput | number
    zoma_ka?: StringFieldUpdateOperationsInput | string
    zoma_en?: StringFieldUpdateOperationsInput | string
  }

  export type DocMainCreateWithoutLegal_FormsInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Full_Name: string
    ISActive?: number | null
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
    Ownership_Types: Ownership_TypesCreateNestedOneWithoutDocMainInput
    Zoma: SizeCreateNestedOneWithoutDocMainInput
  }

  export type DocMainUncheckedCreateWithoutLegal_FormsInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Full_Name: string
    Ownership_Type_ID: number
    ISActive?: number | null
    Zoma_ID: number
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
  }

  export type DocMainCreateOrConnectWithoutLegal_FormsInput = {
    where: DocMainWhereUniqueInput
    create: XOR<DocMainCreateWithoutLegal_FormsInput, DocMainUncheckedCreateWithoutLegal_FormsInput>
  }

  export type DocMainCreateManyLegal_FormsInputEnvelope = {
    data: DocMainCreateManyLegal_FormsInput | DocMainCreateManyLegal_FormsInput[]
  }

  export type DocMainUpsertWithWhereUniqueWithoutLegal_FormsInput = {
    where: DocMainWhereUniqueInput
    update: XOR<DocMainUpdateWithoutLegal_FormsInput, DocMainUncheckedUpdateWithoutLegal_FormsInput>
    create: XOR<DocMainCreateWithoutLegal_FormsInput, DocMainUncheckedCreateWithoutLegal_FormsInput>
  }

  export type DocMainUpdateWithWhereUniqueWithoutLegal_FormsInput = {
    where: DocMainWhereUniqueInput
    data: XOR<DocMainUpdateWithoutLegal_FormsInput, DocMainUncheckedUpdateWithoutLegal_FormsInput>
  }

  export type DocMainUpdateManyWithWhereWithoutLegal_FormsInput = {
    where: DocMainScalarWhereInput
    data: XOR<DocMainUpdateManyMutationInput, DocMainUncheckedUpdateManyWithoutLegal_FormsInput>
  }

  export type DocMainScalarWhereInput = {
    AND?: DocMainScalarWhereInput | DocMainScalarWhereInput[]
    OR?: DocMainScalarWhereInput[]
    NOT?: DocMainScalarWhereInput | DocMainScalarWhereInput[]
    Stat_ID?: IntFilter<"DocMain"> | number
    Legal_Code?: IntFilter<"DocMain"> | number
    Personal_no?: StringFilter<"DocMain"> | string
    Legal_Form_ID?: IntFilter<"DocMain"> | number
    Full_Name?: StringFilter<"DocMain"> | string
    Ownership_Type_ID?: IntFilter<"DocMain"> | number
    ISActive?: IntNullableFilter<"DocMain"> | number | null
    Zoma_ID?: IntFilter<"DocMain"> | number
    Reg_Date?: DateTimeFilter<"DocMain"> | Date | string
    Init_Reg_date?: DateTimeFilter<"DocMain"> | Date | string
    Change?: IntNullableFilter<"DocMain"> | number | null
  }

  export type DocMainCreateWithoutOwnership_TypesInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Full_Name: string
    ISActive?: number | null
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
    Legal_Forms: Legal_FormsCreateNestedOneWithoutDocMainInput
    Zoma: SizeCreateNestedOneWithoutDocMainInput
  }

  export type DocMainUncheckedCreateWithoutOwnership_TypesInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Legal_Form_ID: number
    Full_Name: string
    ISActive?: number | null
    Zoma_ID: number
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
  }

  export type DocMainCreateOrConnectWithoutOwnership_TypesInput = {
    where: DocMainWhereUniqueInput
    create: XOR<DocMainCreateWithoutOwnership_TypesInput, DocMainUncheckedCreateWithoutOwnership_TypesInput>
  }

  export type DocMainCreateManyOwnership_TypesInputEnvelope = {
    data: DocMainCreateManyOwnership_TypesInput | DocMainCreateManyOwnership_TypesInput[]
  }

  export type DocMainUpsertWithWhereUniqueWithoutOwnership_TypesInput = {
    where: DocMainWhereUniqueInput
    update: XOR<DocMainUpdateWithoutOwnership_TypesInput, DocMainUncheckedUpdateWithoutOwnership_TypesInput>
    create: XOR<DocMainCreateWithoutOwnership_TypesInput, DocMainUncheckedCreateWithoutOwnership_TypesInput>
  }

  export type DocMainUpdateWithWhereUniqueWithoutOwnership_TypesInput = {
    where: DocMainWhereUniqueInput
    data: XOR<DocMainUpdateWithoutOwnership_TypesInput, DocMainUncheckedUpdateWithoutOwnership_TypesInput>
  }

  export type DocMainUpdateManyWithWhereWithoutOwnership_TypesInput = {
    where: DocMainScalarWhereInput
    data: XOR<DocMainUpdateManyMutationInput, DocMainUncheckedUpdateManyWithoutOwnership_TypesInput>
  }

  export type DocMainCreateWithoutZomaInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Full_Name: string
    ISActive?: number | null
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
    Legal_Forms: Legal_FormsCreateNestedOneWithoutDocMainInput
    Ownership_Types: Ownership_TypesCreateNestedOneWithoutDocMainInput
  }

  export type DocMainUncheckedCreateWithoutZomaInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Legal_Form_ID: number
    Full_Name: string
    Ownership_Type_ID: number
    ISActive?: number | null
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
  }

  export type DocMainCreateOrConnectWithoutZomaInput = {
    where: DocMainWhereUniqueInput
    create: XOR<DocMainCreateWithoutZomaInput, DocMainUncheckedCreateWithoutZomaInput>
  }

  export type DocMainCreateManyZomaInputEnvelope = {
    data: DocMainCreateManyZomaInput | DocMainCreateManyZomaInput[]
  }

  export type DocMainUpsertWithWhereUniqueWithoutZomaInput = {
    where: DocMainWhereUniqueInput
    update: XOR<DocMainUpdateWithoutZomaInput, DocMainUncheckedUpdateWithoutZomaInput>
    create: XOR<DocMainCreateWithoutZomaInput, DocMainUncheckedCreateWithoutZomaInput>
  }

  export type DocMainUpdateWithWhereUniqueWithoutZomaInput = {
    where: DocMainWhereUniqueInput
    data: XOR<DocMainUpdateWithoutZomaInput, DocMainUncheckedUpdateWithoutZomaInput>
  }

  export type DocMainUpdateManyWithWhereWithoutZomaInput = {
    where: DocMainScalarWhereInput
    data: XOR<DocMainUpdateManyMutationInput, DocMainUncheckedUpdateManyWithoutZomaInput>
  }

  export type DocMainCreateManyLegal_FormsInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Full_Name: string
    Ownership_Type_ID: number
    ISActive?: number | null
    Zoma_ID: number
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
  }

  export type DocMainUpdateWithoutLegal_FormsInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Full_Name?: StringFieldUpdateOperationsInput | string
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
    Ownership_Types?: Ownership_TypesUpdateOneRequiredWithoutDocMainNestedInput
    Zoma?: SizeUpdateOneRequiredWithoutDocMainNestedInput
  }

  export type DocMainUncheckedUpdateWithoutLegal_FormsInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Full_Name?: StringFieldUpdateOperationsInput | string
    Ownership_Type_ID?: IntFieldUpdateOperationsInput | number
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Zoma_ID?: IntFieldUpdateOperationsInput | number
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocMainUncheckedUpdateManyWithoutLegal_FormsInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Full_Name?: StringFieldUpdateOperationsInput | string
    Ownership_Type_ID?: IntFieldUpdateOperationsInput | number
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Zoma_ID?: IntFieldUpdateOperationsInput | number
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocMainCreateManyOwnership_TypesInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Legal_Form_ID: number
    Full_Name: string
    ISActive?: number | null
    Zoma_ID: number
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
  }

  export type DocMainUpdateWithoutOwnership_TypesInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Full_Name?: StringFieldUpdateOperationsInput | string
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
    Legal_Forms?: Legal_FormsUpdateOneRequiredWithoutDocMainNestedInput
    Zoma?: SizeUpdateOneRequiredWithoutDocMainNestedInput
  }

  export type DocMainUncheckedUpdateWithoutOwnership_TypesInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Legal_Form_ID?: IntFieldUpdateOperationsInput | number
    Full_Name?: StringFieldUpdateOperationsInput | string
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Zoma_ID?: IntFieldUpdateOperationsInput | number
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocMainUncheckedUpdateManyWithoutOwnership_TypesInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Legal_Form_ID?: IntFieldUpdateOperationsInput | number
    Full_Name?: StringFieldUpdateOperationsInput | string
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Zoma_ID?: IntFieldUpdateOperationsInput | number
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocMainCreateManyZomaInput = {
    Stat_ID: number
    Legal_Code: number
    Personal_no: string
    Legal_Form_ID: number
    Full_Name: string
    Ownership_Type_ID: number
    ISActive?: number | null
    Reg_Date: Date | string
    Init_Reg_date: Date | string
    Change?: number | null
  }

  export type DocMainUpdateWithoutZomaInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Full_Name?: StringFieldUpdateOperationsInput | string
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
    Legal_Forms?: Legal_FormsUpdateOneRequiredWithoutDocMainNestedInput
    Ownership_Types?: Ownership_TypesUpdateOneRequiredWithoutDocMainNestedInput
  }

  export type DocMainUncheckedUpdateWithoutZomaInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Legal_Form_ID?: IntFieldUpdateOperationsInput | number
    Full_Name?: StringFieldUpdateOperationsInput | string
    Ownership_Type_ID?: IntFieldUpdateOperationsInput | number
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocMainUncheckedUpdateManyWithoutZomaInput = {
    Stat_ID?: IntFieldUpdateOperationsInput | number
    Legal_Code?: IntFieldUpdateOperationsInput | number
    Personal_no?: StringFieldUpdateOperationsInput | string
    Legal_Form_ID?: IntFieldUpdateOperationsInput | number
    Full_Name?: StringFieldUpdateOperationsInput | string
    Ownership_Type_ID?: IntFieldUpdateOperationsInput | number
    ISActive?: NullableIntFieldUpdateOperationsInput | number | null
    Reg_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    Init_Reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Change?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Legal_FormsCountOutputTypeDefaultArgs instead
     */
    export type Legal_FormsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Legal_FormsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Ownership_TypesCountOutputTypeDefaultArgs instead
     */
    export type Ownership_TypesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Ownership_TypesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SizeCountOutputTypeDefaultArgs instead
     */
    export type SizeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SizeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocMainDefaultArgs instead
     */
    export type DocMainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocMainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Legal_FormsDefaultArgs instead
     */
    export type Legal_FormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Legal_FormsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Ownership_TypesDefaultArgs instead
     */
    export type Ownership_TypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Ownership_TypesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SizeDefaultArgs instead
     */
    export type SizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SizeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}