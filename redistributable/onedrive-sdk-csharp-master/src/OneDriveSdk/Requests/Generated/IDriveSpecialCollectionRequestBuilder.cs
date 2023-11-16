// ------------------------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.  See License in the project root for license information.
// ------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

using Microsoft.Graph;

// **NOTE** This file was generated by a tool and any changes will be overwritten.

namespace Microsoft.OneDrive.Sdk
{
    /// <summary>
    /// The interface IDriveSpecialCollectionRequestBuilder.
    /// </summary>
    public partial interface IDriveSpecialCollectionRequestBuilder
    {
        /// <summary>
        /// Builds the request.
        /// </summary>
        /// <returns>The built request.</returns>
        IDriveSpecialCollectionRequest Request();

        /// <summary>
        /// Builds the request.
        /// </summary>
        /// <param name="options">The query and header options for the request.</param>
        /// <returns>The built request.</returns>
        IDriveSpecialCollectionRequest Request(IEnumerable<Option> options);

        /// <summary>
        /// Gets an <see cref="IItemRequestBuilder"/> for the specified Item.
        /// </summary>
        /// <param name="id">The ID for the Item.</param>
        /// <returns>The <see cref="IItemRequestBuilder"/>.</returns>
        IItemRequestBuilder this[string id] { get; }
    }
}
