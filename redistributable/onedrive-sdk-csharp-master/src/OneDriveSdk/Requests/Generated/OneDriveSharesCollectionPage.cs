// ------------------------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.  See License in the project root for license information.
// ------------------------------------------------------------------------------

using System;

using Microsoft.Graph;

// **NOTE** This file was generated by a tool and any changes will be overwritten.


namespace Microsoft.OneDrive.Sdk
{
    /// <summary>
    /// The type OneDriveSharesCollectionPage.
    /// </summary>
    public partial class OneDriveSharesCollectionPage : CollectionPage<Share>, IOneDriveSharesCollectionPage
    {
        /// <summary>
        /// Gets the next page <see cref="IOneDriveSharesCollectionRequest"/> instance.
        /// </summary>
        public IOneDriveSharesCollectionRequest NextPageRequest { get; private set; }

        /// <summary>
        /// Initializes the NextPageRequest property.
        /// </summary>
        public void InitializeNextPageRequest(IBaseClient client, string nextPageLinkString)
        {
            if (!string.IsNullOrEmpty(nextPageLinkString))
            {
                this.NextPageRequest = new OneDriveSharesCollectionRequest(
                    nextPageLinkString,
                    client,
                    null);
            }
        }
    }
}
